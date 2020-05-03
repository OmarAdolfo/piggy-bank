import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MessageService, ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { Router } from '@angular/router';
import { MetaSaving } from 'src/app/shared/models/meta-saving';
import { MetaSavingService } from './meta-saving.service';

@Component({
  selector: 'app-meta-saving',
  templateUrl: './meta-saving.component.html',
  styleUrls: ['./meta-saving.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class MetaSavingComponent implements OnInit {

  form: FormGroup;
  metasSaving: MetaSaving[];
  cols: any[];
  statuses: any[];
  yearlySavings: any[];

  constructor(
    private metaSavingService: MetaSavingService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {
    this.cols = [
      { field: 'anno', header: 'Año' },
      { field: 'cantidad', header: 'Objetivo' },
      { field: '', header: 'Ahorrado' },
      { field: '', header: 'Estado' },
      { field: '', header: 'Opciones' }
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
        this.yearlySavings = data.pagos;
      }
    )
  }

  getSavings(anno: number) {
    const gastos = this.yearlySavings.find(yearlySaving => yearlySaving.anno === anno);
    const totalGastos = gastos ? this.yearlySavings.find(yearlySaving => yearlySaving.anno === anno).total : 0;
    return -totalGastos;
  }

  getStatus(cantidad: number, anno: number) {
    const gastos = this.yearlySavings.find(yearlySaving => yearlySaving.anno === anno);
    const totalGastos = gastos ? this.yearlySavings.find(yearlySaving => yearlySaving.anno === anno).total : 0;
    return cantidad >= totalGastos;
  }

  buildForm() {
    this.form = this.formBuilder.group({
      anno: new FormControl('')
    });
  }

  add() {
    this.router.navigate(['/home/objectives/new']);
  }

  search(sortable?: string, orderBy?: number) {
    this.metaSavingService.get(this.form.value, sortable, orderBy).subscribe(
      (response: any) => {
        const array: MetaSaving[] = response.data.data;
        this.metasSaving = array;
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
    this.metaSavingService.delete(id).subscribe(
      () => {
        this.metasSaving = this.metasSaving.filter(metaSaving => metaSaving.id !== id);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Se ha eliminado el gasto' })
      }
    );
  }

  onRowSelect(id: number) {
    this.router.navigate(['/home/objectives/' + id]);
  }

}
