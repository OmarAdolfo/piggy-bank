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
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent implements OnInit {

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
  loading: boolean;
  display = false;

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
    Promise.resolve().then(() => this.loading = true);
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
        this.goodPractices = goodPractices.data;
        this.template = template.data;
        this.loading = false;
        this.calculate();
      },
      response => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
      }
    )
  }

  getTemplate() {
    return this.templateService.find(this.activatedRoute.snapshot.params.id);
  }

  getPrimaryMonthlyExpenses() {
    return this.expenseService.findAllPrimaryMonthlyExpenses(this.activatedRoute.snapshot.params.id);
  }

  getSecondaryMonthlyExpenses() {
    return this.expenseService.findAllSecondaryMonthlyExpenses(this.activatedRoute.snapshot.params.id);
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
      const exists = this.template.ingresos.filter(ingreso => ingreso.id === this.selectedResource.id);
      if (exists.length > 0) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'La ganancia ya está añadida en la plantilla' });
      } else {
        const revenue = new Revenue();
        revenue.ganancia_id = this.selectedResource;
        revenue.cantidad = 0;
        revenue.plantilla_id = this.template.id;
        revenue.id = this.selectedResource.id;
        this.template.ingresos.push(revenue);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Se ha añadido el ingreso. Recuerda introducir un valor' });
      }
    } else {
      const exists = this.template.pagos.filter(pago => pago.id === this.selectedResource.id);
      if (exists.length > 0) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'El gasto ya está añadido en la plantilla' });
      } else {
        const payment = new Payment();
        payment.gasto_id = this.selectedResource;
        payment.cantidad = 0;
        payment.pagado = 0;
        payment.plantilla_id = this.template.id;
        payment.id = this.selectedResource.id;
        this.template.pagos.push(payment);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Se ha añadido el pago. Recuerda introducir un valor' });
      }
    }
    this.calculateTips();
  }

  deletePayment(id: number) {
    this.template.pagos = this.template.pagos.filter(pago => pago.id !== id);
    this.calculate();
  }

  deleteRevenue(id: number) {
    this.template.ingresos = this.template.ingresos.filter(ingreso => ingreso.id !== id);
    this.calculate();
  }

  save() {
    if (this.template.pagos.length === 0 && this.template.ingresos.length === 0) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Se debe añadir al menos un gasto o ingreso' });
    } else {
      const pagoZero = this.template.pagos.find(pago => pago.cantidad == null || pago.cantidad === 0);
      const ingresoZero = this.template.ingresos.find(ingreso => ingreso.cantidad == null || ingreso.cantidad === 0);
      const pagoCantidadMayor = this.template.pagos.find(pago => pago.cantidad == null || pago.cantidad > 100000);
      const ingresoCantidadMayor = this.template.ingresos.find(ingreso => ingreso.cantidad == null || ingreso.cantidad > 100000);
      if (pagoZero || ingresoZero) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'El campo valor no puede estar vacío o ser 0' });
      } else if (pagoCantidadMayor || ingresoCantidadMayor) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'El campo valor no puede ser mayor que 100000' });
      } else {
        this.templateService.update(this.template).subscribe(
          (response: any) => {
            this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Se ha actualizado la plantilla' });
          },
          response => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se ha podido actualizar la plantilla' });
          }
        );
      }
    }
  }

  calculate() {
    this.calculateTemplate();
    this.calculateGoodPractices();
    this.calculateTips();
  }

  calculateTemplate() {

    this.template.ingresos.forEach(ingreso => ingreso.cantidad = +ingreso.cantidad);
    this.revenues = this.template.ingresos.length === 0 ? 0 : this.template.ingresos.map(ingreso => ingreso.cantidad).reduce((a, b) => parseFloat(a.toString()) + parseFloat(b.toString()));

    this.template.pagos.forEach(pago => pago.cantidad = +pago.cantidad);
    const primaryExpensesFilter = this.template.pagos.filter(pago => pago.gasto_id.id_tipo_gasto.valor === 'Mensuales Primarios');
    let primaryExpenses = 0;
    if (primaryExpensesFilter.length > 0) {
      primaryExpenses = primaryExpensesFilter.map(pago => pago.cantidad).reduce((a, b) => parseFloat(a.toString()) + parseFloat(b.toString()));
    }
    const secondaryExpensesFilter = this.template.pagos.filter(pago => pago.gasto_id.id_tipo_gasto.valor === 'Mensuales Secundarios');
    let secondaryExpenses = 0;
    if (secondaryExpensesFilter.length > 0) {
      secondaryExpenses = secondaryExpensesFilter.map(pago => pago.cantidad).reduce((a, b) => parseFloat(a.toString()) + parseFloat(b.toString()));
    }
    this.primaryExpenses = Number((this.revenues * 0.5 - primaryExpenses).toFixed(2));
    this.secondaryExpenses = Number((this.revenues * 0.3 - secondaryExpenses).toFixed(2));
    this.promiseSavings = Number((this.revenues * 0.2).toFixed(2));
    this.realSavings = Number((this.promiseSavings + this.primaryExpenses + this.secondaryExpenses).toFixed(2));
  }

  calculateGoodPractices() {
    if (this.template.pagos.length > 0) {
      this.goodPracticesUsed = [];
      for (let goodPractices of this.goodPractices) {
        const pago = this.template.pagos.find(pago => goodPractices.palabra_clave === pago.gasto_id.nombre);
        const goodPracticaAmount = (goodPractices.porcentaje * 0.01) * this.revenues;
        if (pago) {
          if (pago.cantidad > goodPracticaAmount) {
            this.goodPracticesUsed.push({ message: 'Es recomendable no sobrepasar el ' + goodPractices.porcentaje + '% de los ingresos en el gasto del ' + goodPractices.palabra_clave, status: false });
          } else {
            this.goodPracticesUsed.push({ message: 'No sobrepasas el ' + goodPractices.porcentaje + '% de los ingresos en el gasto del ' + goodPractices.palabra_clave, status: true });
          }
        }
      }
    }
  }

  calculateTips() {
    this.tips = [];
    if (this.template.ingresos.length > 0 || this.template.pagos.length > 0) {
      if (this.promiseSavings !== 0) {
        if (this.promiseSavings < this.realSavings) {
          this.tips.push({ message: 'Perfecto! Ahorras este mes más de lo esperado', status: true });
        } else {
          this.tips.push({ message: 'No es aconsejable ahorrar menos de lo esperado', status: false });
        }
      }
      if (this.realSavings <= 0) {
        this.tips.push({ message: 'Este mes no es bueno dado que no has ahorrado', status: false });
      } else {
        this.tips.push({ message: 'Felicidades! Has ahorrado este mes', status: true });
      }
      if (this.primaryExpenses < 0) {
        this.tips.push({ message: 'Este mes sobrepasas el dinero establecido para gastos primarios', status: false });
      } else {
        this.tips.push({ message: 'Perfecto! No sobrepasas los gastos primarios', status: true });
      }
      if (this.secondaryExpenses < 0) {
        this.tips.push({ message: 'Este mes sobrepasas el dinero establecido para gastos secundarios', status: false });
      } else {
        this.tips.push({ message: 'Perfecto! No sobrepasas los gastos secundarios', status: true });
      }
    }
  }

  openInfo() {
    this.display = true;
  }

}
