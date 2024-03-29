import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/shared/models/expense';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MessageService, ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { ExpenseService } from './expense.service';
import { Router } from '@angular/router';
import { TypeExpenseService } from '../type-expense/type-expense.service';
import { TypeExpense } from 'src/app/shared/models/type-expense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  form: FormGroup;
  expenses: Expense[];
  cols: any[];
  roles: any[];
  typesExpense: TypeExpense[] = [];
  totalRecords: number;
  loading: boolean;

  constructor(
    private expenseService: ExpenseService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private typeExpenseService: TypeExpenseService,
  ) {
    this.cols = [
      { field: 'nombre', header: 'Nombre', sortOrder: true },
      { field: 'fecha_fin', header: 'Fecha de fin', sortOrder: true },
      { field: 'id_tipo_gasto', header: 'Tipo Gasto', sortOrder: true },
      { field: '', header: 'Opciones', sortOrder: false }
    ];
  }

  ngOnInit(): void {
    this.buildForm();
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
      nombre: new FormControl(''),
      tipo_gasto: new FormControl(''),
      fechaFin: new FormControl(''),
    });
  }

  add() {
    this.router.navigate(['/home/expenses/new']);
  }

  search(sortable?: string, sortOrder?: number, page?: number) {
    Promise.resolve().then(() => this.loading = true);
    this.expenseService.get(this.form.value, sortable, sortOrder, page).subscribe(
      (response: any) => {
        const array: Expense[] = response.data.data;
        this.expenses = array;
        this.totalRecords = response.data.total;
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  customSort(eve: LazyLoadEvent) {
    const sortField = eve.sortField;
    const sortOrder = eve.sortOrder;
    const page = (eve.first / eve.rows) + 1;
    this.search(sortField, sortOrder, page);
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
    this.expenseService.delete(id).subscribe(
      (response: any) => {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message })
      },
      response => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message })
      }
    );
  }

  onRowSelect(id: number) {
    this.router.navigate(['/home/expenses/' + id]);
  }

}
