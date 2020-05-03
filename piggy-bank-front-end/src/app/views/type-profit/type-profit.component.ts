import { Component, OnInit } from '@angular/core';
import { TypeProfit } from 'src/app/shared/models/type-profit';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TypeProfitService } from './type-profit.service';

@Component({
  selector: 'app-type-profit',
  templateUrl: './type-profit.component.html',
  styleUrls: ['./type-profit.component.scss'],
  providers: [MessageService]
})
export class TypeProfitComponent implements OnInit {

  form: FormGroup;
  typesProfit: TypeProfit[];
  cols: any[];
  displayDialog: boolean;
  newTypeProfit: boolean;
  typeProfit: TypeProfit;

  constructor(
    private typeProfitService: TypeProfitService,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {
    this.cols = [
      { field: 'valor', header: 'Valor' },
      { field: 'created_at', header: 'Fecha de creación' },
      { field: 'updated_at', header: 'Fecha de actualización' }
    ];
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      valor: new FormControl('', Validators.required)
    });
  }

  save() {
    this.typeProfitService.add(this.typeProfit).subscribe(
      (response: any) => {
        let typesProfit = [...this.typesProfit];
        typesProfit.push(response.data);
        this.typesProfit = typesProfit;
        this.typeProfit = null;
        this.displayDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
      }
    );
  }

  showDialogToAdd() {
    this.newTypeProfit = true;
    this.typeProfit = new TypeProfit();
    this.displayDialog = true;
  }

  search(sortable?: string, orderBy?: number) {
    this.typeProfitService.get(this.form.get('valor').value, sortable, orderBy).subscribe(
      (response: any) => {
        const array: TypeProfit[] = response.tipos_ganancia.data;
        this.typesProfit = array;
      }
    );
  }

  customSort(eve: LazyLoadEvent) {
    const sortable = eve.sortField;
    const orderBy = eve.sortOrder;
    this.search(sortable, orderBy);
  }

}
