import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { GoodPractice } from 'src/app/shared/models/good-practice';
import { GoodPracticeService } from './good-practice.service';

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
  roles: any[];
  displayDialog: boolean;
  newGoodPractice: boolean;
  goodPractice: GoodPractice;
  selectedGoodPractice: GoodPractice;

  constructor(
    private goodPracticeService: GoodPracticeService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.cols = [
      { field: 'palabra_clave', header: 'Palabra clave' },
      { field: 'porcentaje', header: 'Porcentaje' },
      { field: 'user', header: 'Creado/Actualizado por' },
      { field: 'created_at', header: 'Fecha de creación' },
      { field: 'updated_at', header: 'Fecha de actualización' }
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

  save() {
    if (this.goodPractice.id) {
      this.goodPracticeService.update(this.goodPractice).subscribe(
        (response: any) => {
          let goodPractices = [...this.goodPractices];
          goodPractices[this.goodPractices.indexOf(this.selectedGoodPractice)] = this.goodPractice;
          this.goodPractices = goodPractices;
          this.goodPractice = null;
          this.displayDialog = false;
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
        }
      );
    } else {
      this.goodPracticeService.add(this.goodPractice).subscribe(
        (response: any) => {
          let goodPractices = [...this.goodPractices];
          goodPractices.push(response.data);
          this.goodPractices = goodPractices;
          this.goodPractice = null;
          this.displayDialog = false;
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
        }
      );
    }
  }

  showDialogToAdd() {
    this.newGoodPractice = true;
    this.goodPractice = new GoodPractice();
    this.displayDialog = true;
  }

  search(sortable?: string, orderBy?: number) {
    this.goodPracticeService.get(this.form.get('palabraClave').value, this.form.get('porcentaje').value, sortable, orderBy).subscribe(
      (response: any) => {
        const array: GoodPractice[] = response.data;
        this.goodPractices = array;
      }
    );
  }

  customSort(eve: LazyLoadEvent) {
    const sortable = eve.sortField;
    const orderBy = eve.sortOrder;
    this.search(sortable, orderBy);
  }

  confirm() {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que deseas borrar?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete();
      }
    });
  }

  delete() {
    this.goodPracticeService.delete(this.goodPractice).subscribe(
      () => {
        let index = this.goodPractices.indexOf(this.selectedGoodPractice);
        this.goodPractices = this.goodPractices.filter((val, i) => i != index);
        this.goodPractice = null;
        this.displayDialog = false;
      }
    );
  }

  onRowSelect(event) {
    this.newGoodPractice = false;
    this.goodPractice = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: GoodPractice) {
    let goodPractice = new GoodPractice();
    for (let prop in c) {
      goodPractice[prop] = c[prop];
    }
    return goodPractice;
  }

}
