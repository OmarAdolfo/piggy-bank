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
  styleUrls: ['./expense.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ExpenseComponent implements OnInit {

  form: FormGroup;
  expenses: Expense[];
  cols: any[];
  roles: any[];
  typesExpense: TypeExpense[] = [];

  constructor(
    private expenseService: ExpenseService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private typeExpenseService: TypeExpenseService,
  ) {
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'fecha_fin', header: 'Fecha de fin' },
      { field: 'tipoGasto', header: 'Tipo Gasto' },
      { field: 'created_at', header: 'Fecha de creación' },
      { field: 'updated_at', header: 'Fecha de actualización' },
      { field: '', header: 'Opciones' }
    ];
  }

  ngOnInit(): void {
    this.buildForm();
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
      nombre: new FormControl(''),
      tipo_gasto: new FormControl(''),
      fechaFin: new FormControl(''),
    });
  }

  add() {
    this.router.navigate(['/home/expenses/new']);
  }

  search(sortable?: string, orderBy?: number) {
    this.expenseService.get(this.form.value, sortable, orderBy).subscribe(
      (response: any) => {
        const array: Expense[] = response.data.data;
        this.expenses = array;
      }
    );
  }

  customSort(eve: LazyLoadEvent) {
    const sortable = eve.sortField;
    const orderBy = eve.sortOrder;
    this.search(sortable, orderBy);
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
    this.expenseService.delete(id).subscribe(
      () => {
        this.expenses = this.expenses.filter((val, i) => i != id);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Se ha eliminado el gasto' })
      }
    );
  }

  onRowSelect(id: number) {
    this.router.navigate(['/home/expenses/' + id]);
  }

}
