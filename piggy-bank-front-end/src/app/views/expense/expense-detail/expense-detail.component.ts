import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ExpenseService } from '../expense.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/shared/models/expense';
import { TypeExpenseService } from '../../type-expense/type-expense.service';
import { TypeExpense } from 'src/app/shared/models/type-expense';
import { Location } from '@angular/common';
import { MessageService, ConfirmationService } from 'primeng/api';
import { PaymentService } from './payment-detail/payment.service';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ExpenseDetailComponent implements OnInit {

  form: FormGroup;
  newExpense: boolean;
  expense: Expense;
  typesExpense: TypeExpense[] = [];
  cols: any[];

  constructor(
    private formBuilder: FormBuilder,
    private expenseService: ExpenseService,
    private activatedRoute: ActivatedRoute,
    private typeExpenseService: TypeExpenseService,
    private location: Location,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private paymentService: PaymentService
  ) {
    this.cols = [
      { field: 'cantidad', header: 'Cantidad' },
      { field: 'fecha', header: 'Fecha' },
      { field: '', header: 'Opciones' }
    ];
  }

  ngOnInit(): void {
    this.newExpense = this.activatedRoute.snapshot.params.id === 'new' ? true : false;
    if (this.newExpense) {
      this.expense = new Expense();
      this.buildForm();
    } else {
      this.expenseService.find(this.activatedRoute.snapshot.params.id).subscribe(
        (response: any) => {
          this.expense = response.data;
          this.buildForm();
        }
      )
    }
    this.getTypesExpense();
  }

  getTypesExpense() {
    this.typeExpenseService.findAll().subscribe(
      (data: any) => {
        this.typesExpense = data.tipos_gasto;
      }
    );
  }

  buildForm() {
    this.form = this.formBuilder.group({
      nombre: new FormControl(this.expense.nombre, Validators.required),
      tipo_gasto: new FormControl(this.expense.tipo_gasto ? this.expense.tipo_gasto : '', Validators.required),
      recordar: new FormControl(this.expense.recordar && this.expense.recordar === 1 ? true : false),
      fechaFin: new FormControl(this.expense.fecha_fin),
      flexible: new FormControl(this.expense.flexible && this.expense.flexible === 1 ? true : false)
    });
  }

  save() {
    const expense = Object.assign({}, this.form.value);
    if (this.expense.id) {
      this.expenseService.update(expense, this.expense.id).subscribe(
        (response: any) => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response });
        },
        response => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
        }
      );
    } else {
      this.expenseService.add(expense).subscribe(
        (response: any) => {
          this.back();
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
    this.paymentService.delete(id).subscribe(
      () => {
        this.expense.pagos = this.expense.pagos.filter(pago => pago.id !== id);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Se ha eliminado el pago' })
      }
    );
  }

  add() {
    this.router.navigate(['/home/expenses/' + this.expense.id + '/payment/new']);
  }

  onRowSelect(id: number) {
    this.router.navigate(['/home/expenses/' + this.expense.id + '/payment/' + id]);
  }

}
