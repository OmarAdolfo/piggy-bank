import { Component, OnInit } from '@angular/core';
import { TypeSaving } from 'src/app/shared/models/type-saving';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TypeSavingService } from './type-saving.service';

@Component({
  selector: 'app-type-saving',
  templateUrl: './type-saving.component.html',
  styleUrls: ['./type-saving.component.scss'],
  providers: [MessageService]
})
export class TypeSavingComponent implements OnInit {

  typeSavingForm: FormGroup;
  typesSaving: TypeSaving[];
  cols: any[];
  displayDialog: boolean;
  newTypeSaving: boolean;
  typeSaving: TypeSaving;

  constructor(
    private typeSavingService: TypeSavingService,
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
    this.typeSavingForm = this.formBuilder.group({
      valor: new FormControl('', Validators.required)
    });
  }

  save() {
    this.typeSavingService.add(this.typeSaving).subscribe(
      (response: any) => {
        let typesSaving = [...this.typesSaving];
        typesSaving.push(response.data);
        this.typesSaving = typesSaving;
        this.typeSaving = null;
        this.displayDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
      }
    );
  }

  showDialogToAdd() {
    this.newTypeSaving = true;
    this.typeSaving = new TypeSaving();
    this.displayDialog = true;
  }

  search(sortable?: string, orderBy?: number) {
    this.typeSavingService.get(this.typeSavingForm.get('valor').value, sortable, orderBy).subscribe(
      (response: any) => {
        const array: TypeSaving[] = response.tipos_ahorro.data;
        this.typesSaving = array;
      }
    );
  }

  customSort(eve: LazyLoadEvent) {
    const sortable = eve.sortField;
    const orderBy = eve.sortOrder;
    this.search(sortable, orderBy);
  }

}
