import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { TemplateService } from '../template.service';
import { Template } from 'src/app/shared/models/template';
import { MonthService } from 'src/app/shared/services/month-service.service';
import { ExpenseService } from '../../expense/expense.service';
import { Expense } from 'src/app/shared/models/expense';
import { ProfitService } from '../../profit/profit.service';
import { Profit } from 'src/app/shared/models/profit';
import { Payment } from 'src/app/shared/models/payment';
import { Revenue } from 'src/app/shared/models/revenue';
import { MessageService, ConfirmationService } from 'primeng/api';
import { GoodPracticeService } from '../../good-practice/good-practice.service';
import { GoodPractice } from 'src/app/shared/models/good-practice';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class CreateTemplateComponent implements OnInit {

  isNewTemplate: boolean;
  types: any[];
  resources: any[];
  template: Template;
  primaryMonthlyExpenses: Expense[];
  secondaryMonthlyExpenses: Expense[];
  monthlyProfits: Profit[];
  isProfit: boolean = true;
  selectedResource: any;
  revenues: number = 0;
  primaryExpenses: number = 0;
  secondaryExpenses: number = 0;
  promiseSavings: number = 0;
  realSavings: number = 0;
  goodPractices: GoodPractice[] = [];
  goodPracticesUsed: any[] = [];
  tips: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private templateService: TemplateService,
    private monthService: MonthService,
    private expenseService: ExpenseService,
    private profitService: ProfitService,
    private messageService: MessageService,
    private goodPracticeService: GoodPracticeService
  ) {
    this.types = [
      { name: 'Ingresos', code: 'ingresos' },
      { name: 'Gastos primarios', code: 'gastos-primarios' },
      { name: 'Gastos secundarios', code: 'gastos-secundarios' }
    ];
  }

  ngOnInit(): void {
    this.isNewTemplate = this.activatedRoute.snapshot.params.id === 'new' ? true : false;
    combineLatest(
      this.getPrimaryMonthlyExpenses(),
      this.getSecondaryMonthlyExpenses(),
      this.getMonthlyProfits(),
      this.getGoodPractices(),
      this.getTemplate()
    ).subscribe(
      ([primaryMonthlyExpenses, secondaryMonthlyExpenses, findAllMonthlyProfits, goodPractices, template]) => {
        this.primaryMonthlyExpenses = primaryMonthlyExpenses.data;
        this.secondaryMonthlyExpenses = secondaryMonthlyExpenses.data;
        this.monthlyProfits = findAllMonthlyProfits.data;
        this.resources = this.monthlyProfits;
        this.goodPractices = goodPractices.buenas_practicas;
        this.template = template.data;
        this.calculate();
      }
    )
  }

  getTemplate() {
    return this.templateService.find(this.activatedRoute.snapshot.params.id);
  }

  getPrimaryMonthlyExpenses() {
    return this.expenseService.findAllPrimaryMonthlyExpenses();
  }

  getSecondaryMonthlyExpenses() {
    return this.expenseService.findAllSecondaryMonthlyExpenses();
  }

  getMonthlyProfits() {
    return this.profitService.findAllMonthlyProfits();
  }

  getGoodPractices() {
    return this.goodPracticeService.findAll();
  }

  selectResource(eve: any) {
    if (eve.value.code == 'ingresos') {
      this.resources = this.monthlyProfits;
      this.isProfit = true;
    } else if (eve.value.code == 'gastos-primarios') {
      this.resources = this.primaryMonthlyExpenses;
      this.isProfit = false;
    } else if (eve.value.code == 'gastos-secundarios') {
      this.resources = this.secondaryMonthlyExpenses;
      this.isProfit = false;
    }
    this.selectedResource = null;
  }

  back() {
    this.location.back();
  }

  getMonth(month: number) {
    return this.monthService.getMonth(month);
  }

  addResouce() {
    if (this.selectedResource.id_tipo_ganancia) {
      const revenue = new Revenue();
      revenue.ganancia_id = this.selectedResource;
      revenue.cantidad = 0;
      revenue.plantilla_id = this.template.id;
      this.template.ingresos.push(revenue);
    } else {
      const payment = new Payment();
      payment.gasto_id = this.selectedResource;
      payment.cantidad = 0;
      payment.pagado = false;
      payment.plantilla_id = this.template.id;
      this.template.pagos.push(payment);
    }
  }

  delete() {

  }

  save() {
    const pago = this.template.pagos.find(pago => pago.cantidad == null || pago.cantidad === 0);
    const ingreso = this.template.ingresos.find(ingreso => ingreso.cantidad == null || ingreso.cantidad === 0);
    if (pago || ingreso) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'El campo valor no puede estar vacío o ser 0' });
    } else {
      this.template.pagos.forEach(pago => pago.cantidad = +pago.cantidad);
      this.template.ingresos.forEach(ingreso => ingreso.cantidad = +ingreso.cantidad);
      this.templateService.update(this.template).subscribe(
        (response: any) => {

        }
      );
    }
  }

  calculate() {
    this.calculateTemplate();
    this.calculateGoodPractices();
    this.calculateTips();
  }

  calculateTemplate() {
    if (this.template.ingresos.length > 0) {
      this.revenues = this.template.ingresos.map(ingreso => ingreso.cantidad).reduce((a, b) => a + b);
      const primaryExpensesFilter = this.template.pagos.filter(pago => pago.gasto_id.id_tipo_gasto.valor === 'Mensuales Primarios');
      let primaryExpenses = 0;
      if (primaryExpensesFilter.length > 0) {
        primaryExpenses = primaryExpensesFilter.map(pago => pago.cantidad).reduce((a, b) => a + b);
      }
      const secondaryExpensesFilter = this.template.pagos.filter(pago => pago.gasto_id.id_tipo_gasto.valor === 'Mensuales Secundarios');
      let secondaryExpenses = 0;
      if (secondaryExpensesFilter.length > 0) {
        secondaryExpenses = secondaryExpensesFilter.map(pago => pago.cantidad).reduce((a, b) => a + b);;
      }
      this.primaryExpenses = (Math.round((this.revenues * 0.5) * 100) / 100) - primaryExpenses;
      this.secondaryExpenses = (Math.round((this.revenues * 0.3) * 100) / 100) - secondaryExpenses;
      this.promiseSavings = (Math.round(((this.revenues * 0.2)) * 100) / 100);
      this.realSavings = (Math.round(((this.revenues * 0.2) + this.primaryExpenses + this.secondaryExpenses) * 100) / 100);
    }
  }

  calculateGoodPractices() {
    if (this.template.pagos.length > 0) {
      this.goodPracticesUsed = [];
      for (let goodPractices of this.goodPractices) {
        const pago = this.template.pagos.find(pago => goodPractices.palabra_clave === pago.gasto_id.nombre);
        const goodPracticaAmount = (goodPractices.porcentaje * 0.01) * this.revenues;
        if (pago.cantidad > goodPracticaAmount) {
          this.goodPracticesUsed.push({ message: 'Es recomendable no sobrepasar el ' + goodPractices.porcentaje + '% de los ingresos en el gasto del ' + goodPractices.palabra_clave, status: false });
        } else {
          this.goodPracticesUsed.push({ message: 'No sobrepasas el ' + goodPractices.porcentaje + '% de los ingresos en el gasto del ' + goodPractices.palabra_clave, status: true });
        }
      }
    }
  }

  calculateTips() {
    if (this.promiseSavings !== 0) {
      this.tips = [];
      if (this.promiseSavings < this.realSavings) {
        this.tips.push({ message: 'Perfecto! Ahorras este mes más de lo esperado', status: true });
      } else {
        this.tips.push({ message: 'No es aconsejable ahorrar menos de lo esperado', status: false });
      }
    }
  }

}
