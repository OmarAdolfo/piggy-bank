import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Profit } from 'src/app/shared/models/profit';
import { TypeProfit } from 'src/app/shared/models/type-profit';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';
import { TypeProfitService } from '../../type-profit/type-profit.service';
import { ProfitService } from '../profit.service';
import { Location } from '@angular/common';
import { RevenueService } from './revenue-detail/revenue.service';

@Component({
  selector: 'app-profit-detail',
  templateUrl: './profit-detail.component.html',
  styleUrls: ['./profit-detail.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ProfitDetailComponent implements OnInit {

  form: FormGroup;
  newProfit: boolean;
  profit: Profit;
  typesProfit: TypeProfit[] = [];
  cols: any[];

  constructor(
    private formBuilder: FormBuilder,
    private profitService: ProfitService,
    private activatedRoute: ActivatedRoute,
    private typeProfitService: TypeProfitService,
    private location: Location,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private revenueService: RevenueService
  ) {
    this.cols = [
      { field: 'cantidad', header: 'Cantidad' },
      { field: 'fecha', header: 'Fecha' },
      { field: '', header: 'Opciones' }
    ];
  }

  ngOnInit(): void {
    this.newProfit = this.activatedRoute.snapshot.params.id === 'new' ? true : false;
    if (this.newProfit) {
      this.profit = new Profit();
      this.buildForm();
    } else {
      this.profitService.find(this.activatedRoute.snapshot.params.id).subscribe(
        (response: any) => {
          this.profit = response.data;
          this.buildForm();
        }
      )
    }
    this.getTypesProfit();
  }

  getTypesProfit() {
    this.typeProfitService.findAll().subscribe(
      (data: any) => {
        this.typesProfit = data.tipos_ganancia;
      }
    );
  }

  buildForm() {
    this.form = this.formBuilder.group({
      nombre: new FormControl(this.profit.nombre, Validators.required),
      id_tipo_ganancia: new FormControl(this.profit.id_tipo_ganancia ? this.profit.id_tipo_ganancia : '', Validators.required)
    });
  }

  save() {
    const profit = Object.assign({}, this.form.value);
    if (this.profit.id) {
      this.profitService.update(profit, this.profit.id).subscribe(
        (response: any) => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
          this.profit = response.data;
        },
        response => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
        }
      );
    } else {
      this.profitService.add(profit).subscribe(
        (response: any) => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
          this.profit = response.data;
        },
        response => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
        }
      );
    }
  }

  back() {
    this.location.back();
  }

  confirm(id: number) {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que deseas borrar?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete(id);
      }
    });
  }

  delete(id: number) {
    this.revenueService.delete(id).subscribe(
      () => {
        this.profit.ingresos = this.profit.ingresos.filter(ingreso => ingreso.id !== id);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Se ha eliminado el ingreso' })
      }
    );
  }

  add() {
    this.router.navigate(['/home/profits/' + this.profit.id + '/revenue/new']);
  }

  onRowSelect(id: number) {
    this.router.navigate(['/home/profits/' + this.profit.id + '/revenue/' + id]);
  }

}
