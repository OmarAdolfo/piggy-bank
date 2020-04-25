import { Component, OnInit } from '@angular/core';
import { MessageService, LazyLoadEvent } from 'primeng/api';
import { TypeExpenseService } from './type-expense.service';
import { TypeExpense } from 'src/app/shared/models/type-expense';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-type-expense',
  templateUrl: './type-expense.component.html',
  styleUrls: ['./type-expense.component.scss'],
  providers: [MessageService]
})
export class TypeExpenseComponent implements OnInit {

  typeExpenseForm: FormGroup;
  typesExpense: TypeExpense[];
  cols: any[];
  displayDialog: boolean;
  newTypeExpense: boolean;
  typeExpense: TypeExpense;

  constructor(
    private typeExpenseService: TypeExpenseService,
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
    this.typeExpenseForm = this.formBuilder.group({
      valor: new FormControl('', Validators.required)
    });
  }

  save() {
    this.typeExpenseService.add(this.typeExpense).subscribe(
      (response: any) => {
        let typesExpense = [...this.typesExpense];
        typesExpense.push(response.data);
        this.typesExpense = typesExpense;
        this.typeExpense = null;
        this.displayDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
      }
    );
  }

  showDialogToAdd() {
    this.newTypeExpense = true;
    this.typeExpense = new TypeExpense();
    this.displayDialog = true;
  }

  search(sortable?: string, orderBy?: number) {
    this.typeExpenseService.get(this.typeExpenseForm.get('valor').value, sortable, orderBy).subscribe(
      (response: any) => {
        const array: TypeExpense[] = response.tipos_gasto.data;
        console.log(array);
        this.typesExpense = array;
      }
    );
  }

  customSort(eve: LazyLoadEvent) {
    const sortable = eve.sortField;
    const orderBy = eve.sortOrder;
    this.search(sortable, orderBy);
  }

}
