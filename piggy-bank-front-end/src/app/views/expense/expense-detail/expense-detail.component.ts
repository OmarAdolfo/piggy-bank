import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ExpenseService } from '../expense.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Expense } from 'src/app/shared/models/expense';
import { TypeExpenseService } from '../../type-expense/type-expense.service';
import { TypeExpense } from 'src/app/shared/models/type-expense';
import { Location, DatePipe } from '@angular/common';
import { MessageService, ConfirmationService } from 'primeng/api';
import { PaymentService } from './payment-detail/payment.service';
import { noWhitespaceValidator } from 'src/app/shared/validators/nowhitespace.validator';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.scss'],
  providers: [MessageService, ConfirmationService, DatePipe]
})
export class ExpenseDetailComponent implements OnInit {

  form: FormGroup;
  newExpense: boolean;
  expense: Expense;
  typesExpense: TypeExpense[] = [];
  cols: any[];
  previousUrl: string;
  loading: boolean;
  isMonthly: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private expenseService: ExpenseService,
    private activatedRoute: ActivatedRoute,
    private typeExpenseService: TypeExpenseService,
    private location: Location,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private paymentService: PaymentService,
    private datePipe: DatePipe
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
      Promise.resolve().then(() => this.loading = true);
      this.expenseService.find(this.activatedRoute.snapshot.params.id).subscribe(
        (response: any) => {
          this.expense = response.data;
          this.isMonthly = this.expense.id_tipo_gasto.valor.includes('Mensuales');
          this.loading = false;
          this.buildForm();
        },
        response => {
          this.loading = false;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
        }
      )
    }
    this.getTypesExpense();
  }

  getTypesExpense() {
    this.typeExpenseService.findAll().subscribe(
      (response: any) => {
        this.typesExpense = response.data;
      }
    );
  }

  buildForm() {
    this.form = this.formBuilder.group({
      nombre: new FormControl(this.expense.nombre, [Validators.required, noWhitespaceValidator]),
      id_tipo_gasto: new FormControl({ value: this.expense.id_tipo_gasto ? this.expense.id_tipo_gasto : '', disabled: this.expense.id_tipo_gasto ? true : false }, Validators.required),
      fechaFin: new FormControl(this.expense.fecha_fin ? new Date(this.expense.fecha_fin) : ''),
      flexible: new FormControl(this.expense.flexible),
    });
  }

  save() {
    Promise.resolve().then(() => this.loading = true);
    if (this.expense.id) {
      const expense: Expense = Object.assign(this.expense, this.form.value);
      this.expenseService.update(expense, this.expense.id).subscribe(
        (response: any) => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
          this.expense = response.data;
          this.loading = false;
        },
        response => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
          this.loading = false;
        }
      );
    } else {
      const expense: Expense = Object.assign({}, this.form.value);
      this.expenseService.add(expense).subscribe(
        (response: any) => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
          this.expense = response.data;
          this.loading = false;
          this.isMonthly = this.expense.id_tipo_gasto.valor.includes('Mensuales');
          this.location.replaceState('/home/expenses/' + this.expense.id);
        },
        response => {
          this.loading = false;
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
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete(id);
      }
    });
  }

  delete(id: number) {
    this.paymentService.delete(id).subscribe(
      (response: any) => {
        this.expense.pagos = this.expense.pagos.filter(pago => pago.id !== id);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message })
      },
      response => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message })
      }
    );
  }

  add() {
    this.router.navigate(['/home/expenses/' + this.expense.id + '/payment/new']);
  }

  onRowSelect(id: number) {
    this.router.navigate(['/home/expenses/' + this.expense.id + '/payment/' + id]);
  }

  changeTypeExpense(eve: any) {
    if (!this.expense.id) {
      this.isMonthly = eve.value.valor.includes('Mensuales');
    }
  }

}
