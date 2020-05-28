import { Component, OnInit } from '@angular/core';
import { MessageService, LazyLoadEvent, ConfirmationService } from 'primeng/api';
import { TypeExpenseService } from './type-expense.service';
import { TypeExpense } from 'src/app/shared/models/type-expense';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-type-expense',
  templateUrl: './type-expense.component.html',
  styleUrls: ['./type-expense.component.scss']
})
export class TypeExpenseComponent implements OnInit {

  typeExpenseForm: FormGroup;
  typesExpense: TypeExpense[];
  cols: any[];
  totalRecords: number;
  loading = false;

  constructor(
    private typeExpenseService: TypeExpenseService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private authenticationService: AuthenticationService
  ) {
    this.cols = [
      { field: 'valor', header: 'Valor' },
      { field: 'descripcion', header: 'Descripción' },
      { field: '', header: 'Opciones' }
    ];
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.typeExpenseForm = this.formBuilder.group({
      valor: new FormControl(''),
      descripcion: new FormControl(''),
    });
  }

  add() {
    this.router.navigate(['/home/type-expense/new']);
  }

  search(sortable?: string, orderBy?: number, page?: number) {
    Promise.resolve().then(() => this.loading = true);
    this.typeExpenseService.get(this.typeExpenseForm.value, sortable, orderBy, page).subscribe(
      (response: any) => {
        const array: TypeExpense[] = response.data.data;
        this.typesExpense = array;
        this.totalRecords = response.data.total;
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  customSort(eve: LazyLoadEvent) {
    const sortable = eve.sortField;
    const orderBy = eve.sortOrder;
    const page = (eve.first / eve.rows) + 1;
    this.search(sortable, orderBy, page);
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
    this.typeExpenseService.delete(id).subscribe(
      (response: any) => {
        this.typesExpense = this.typesExpense.filter(typeExpense => typeExpense.id !== id);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message })
      },
      response => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message })
      }
    );
  }

  onRowSelect(id: number) {
    this.router.navigate(['/home/type-expense/' + id]);
  }

  checkProperty(id: number) {
    return id === parseInt(this.authenticationService.getSub());
  }

}
