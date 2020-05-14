import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { GoodPractice } from 'src/app/shared/models/good-practice';
import { GoodPracticeService } from './good-practice.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-good-practice',
  templateUrl: './good-practice.component.html',
  styleUrls: ['./good-practice.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class GoodPracticeComponent implements OnInit {

  form: FormGroup;
  goodPractices: GoodPractice[];
  cols: any[];
  totalRecords: number;

  constructor(
    private goodPracticeService: GoodPracticeService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {
    this.cols = [
      { field: 'palabra_clave', header: 'Palabra clave' },
      { field: 'porcentaje', header: 'Porcentaje' },
      { field: 'user', header: 'Creado/Actualizado por' },
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
      palabraClave: new FormControl(''),
      porcentaje: new FormControl('')
    });
  }

  add() {
    this.router.navigate(['/home/good-practices/new']);
  }

  search(sortable?: string, orderBy?: number, page?: number) {
    this.goodPracticeService.get(this.form.value, sortable, orderBy, page).subscribe(
      (response: any) => {
        const array: GoodPractice[] = response.data.data;
        this.goodPractices = array;
        this.totalRecords = response.data.total;
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
    this.goodPracticeService.delete(id).subscribe(
      () => {
        this.goodPractices = this.goodPractices.filter(goodPractice => goodPractice.id !== id);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Se ha eliminado la buena práctica' })
      },
      () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se ha podido eliminar la buena práctica' })
      }
    );
  }

  onRowSelect(id: number) {
    this.router.navigate(['/home/good-practices/' + id]);
  }

}
