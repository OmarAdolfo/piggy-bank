import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ConfirmationService, MessageService, LazyLoadEvent } from 'primeng/api';
import { Router } from '@angular/router';
import { TypeProfitService } from '../type-profit/type-profit.service';
import { Profit } from 'src/app/shared/models/profit';
import { TypeProfit } from 'src/app/shared/models/type-profit';
import { ProfitService } from './profit.service';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ProfitComponent implements OnInit {

  form: FormGroup;
  profits: Profit[];
  cols: any[];
  roles: any[];
  typesProfit: TypeProfit[] = [];

  constructor(
    private profitService: ProfitService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private typeProfitService: TypeProfitService,
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
    this.getTypesProfit();
  }

  getTypesProfit() {
    this.typeProfitService.findAll().subscribe(
      (data: any) => {
        this.typesProfit = data.tipos_gasto;
      }
    );
  }

  buildForm() {
    this.form = this.formBuilder.group({
      nombre: new FormControl(''),
      id_tipo_ganancia: new FormControl('')
    });
  }

  add() {
    this.router.navigate(['/home/profits/new']);
  }

  search(sortable?: string, orderBy?: number) {
    this.profitService.get(this.form.value, sortable, orderBy).subscribe(
      (response: any) => {
        const array: Profit[] = response.data.data;
        this.profits = array;
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
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete(id);
      }
    });
  }

  delete(id: number) {
    this.profitService.delete(id).subscribe(
      () => {
        this.profits = this.profits.filter((val, i) => i != id);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Se ha eliminado el gasto' })
      }
    );
  }

  onRowSelect(id: number) {
    this.router.navigate(['/home/profits/' + id]);
  }

}
