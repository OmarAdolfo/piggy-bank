import { Component, OnInit } from '@angular/core';
import { TypeProfit } from 'src/app/shared/models/type-profit';
import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/api';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TypeProfitService } from './type-profit.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-type-profit',
  templateUrl: './type-profit.component.html',
  styleUrls: ['./type-profit.component.scss']
})
export class TypeProfitComponent implements OnInit {

  form: FormGroup;
  typesProfit: TypeProfit[];
  cols: any[];
  totalRecords: number;
  loading: boolean;

  constructor(
    private typeProfitService: TypeProfitService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private authenticationService: AuthenticationService
  ) {
    this.cols = [
      { field: 'valor', header: 'Valor' },
      { field: 'descripcion', header: 'Descripción' },
      { field: 'created_at', header: 'Fecha de creación' },
      { field: 'updated_at', header: 'Fecha de actualización' },
      { field: '', header: 'Opciones' }
    ];
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      valor: new FormControl('', Validators.required),
      descripcion: new FormControl(''),
    });
  }

  add() {
    this.router.navigate(['/home/type-profit/new']);
  }

  search(sortable?: string, orderBy?: number, page?: number) {
    Promise.resolve().then(() => this.loading = true);
    this.typeProfitService.get(this.form.value, sortable, orderBy, page).subscribe(
      (response: any) => {
        const array: TypeProfit[] = response.data.data;
        this.typesProfit = array;
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
    this.typeProfitService.delete(id).subscribe(
      (response: any) => {
        this.typesProfit = this.typesProfit.filter(typeProfit => typeProfit.id !== id);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message })
      },
      response => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message })
      }
    );
  }

  onRowSelect(id: number) {
    this.router.navigate(['/home/type-profit/' + id]);
  }

  checkProperty(id: number) {
    return id === parseInt(this.authenticationService.getSub());
  }

}
