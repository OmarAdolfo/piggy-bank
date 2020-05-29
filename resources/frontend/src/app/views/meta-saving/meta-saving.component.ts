import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MessageService, ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { Router } from '@angular/router';
import { MetaSaving } from 'src/app/shared/models/meta-saving';
import { MetaSavingService } from './meta-saving.service';

@Component({
  selector: 'app-meta-saving',
  templateUrl: './meta-saving.component.html',
  styleUrls: ['./meta-saving.component.scss']
})
export class MetaSavingComponent implements OnInit {

  form: FormGroup;
  metasSaving: MetaSaving[];
  cols: any[];
  statuses: any[];
  pagos: any[];
  ingresos: any[];
  totalRecords: number;
  loading: boolean;

  constructor(
    private metaSavingService: MetaSavingService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {
    this.cols = [
      { field: 'anno', header: 'Año', sortOrder: true },
      { field: 'cantidad', header: 'Objetivo', sortOrder: true },
      { field: '', header: 'Ahorrado', sortOrder: false },
      { field: '', header: 'Estado', sortOrder: false },
      { field: '', header: 'Opciones', sortOrder: false }
    ];
    this.statuses = [
      { label: 'No superado', value: 'no-superado' },
      { label: 'Superado', value: 'superado' }
    ]
  }

  ngOnInit(): void {
    this.getYearlySaving();
    this.buildForm();
  }

  getYearlySaving() {
    this.metaSavingService.getYearlySaving().subscribe(
      (data: any) => {
        this.pagos = data.pagos;
        this.ingresos = data.ingresos;
      }
    )
  }

  getSavings(anno: number) {
    const gastos = this.pagos.find(yearlySaving => yearlySaving.anno === anno);
    const ingresos = this.ingresos.find(yearlySaving => yearlySaving.anno === anno);
    const totalGastos = gastos ? this.pagos.find(yearlySaving => yearlySaving.anno === anno).total : 0;
    const totalIngresos = ingresos ? this.ingresos.find(yearlySaving => yearlySaving.anno === anno).total : 0;
    return totalIngresos - totalGastos;
  }

  getStatus(cantidad: number, anno: number) {
    const gastos = this.pagos.find(yearlySaving => yearlySaving.anno === anno);
    const ingresos = this.ingresos.find(yearlySaving => yearlySaving.anno === anno);
    const totalGastos = gastos ? this.pagos.find(yearlySaving => yearlySaving.anno === anno).total : 0;
    const totalIngresos = ingresos ? this.ingresos.find(yearlySaving => yearlySaving.anno === anno).total : 0;
    return cantidad <= (totalIngresos - totalGastos);
  }

  buildForm() {
    this.form = this.formBuilder.group({
      anno: new FormControl('')
    });
  }

  add() {
    this.router.navigate(['/home/objectives/new']);
  }

  search(sortable?: string, orderBy?: number, page?: number) {
    Promise.resolve().then(() => this.loading = true);
    this.metaSavingService.get(this.form.value, sortable, orderBy, page).subscribe(
      (response: any) => {
        const array: MetaSaving[] = response.data.data;
        this.metasSaving = array;
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
    this.metaSavingService.delete(id).subscribe(
      (response: any) => {
        this.metasSaving = this.metasSaving.filter(metaSaving => metaSaving.id !== id);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message })
      },
      response => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message })
      }
    );
  }

  onRowSelect(id: number) {
    this.router.navigate(['/home/objectives/' + id]);
  }

}
