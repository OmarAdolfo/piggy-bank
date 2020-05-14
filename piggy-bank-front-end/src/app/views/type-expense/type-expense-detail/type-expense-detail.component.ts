import { Component, OnInit } from '@angular/core';
import { TypeExpense } from 'src/app/shared/models/type-expense';
import { TypeExpenseService } from '../type-expense.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-type-expense-detail',
  templateUrl: './type-expense-detail.component.html',
  styleUrls: ['./type-expense-detail.component.scss'],
  providers: [MessageService]
})
export class TypeExpenseDetailComponent implements OnInit {

  typeExpense: TypeExpense;
  newTypeExpense: boolean;
  form: FormGroup;

  constructor(
    private typeExpenseService: TypeExpenseService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.newTypeExpense = this.activatedRoute.snapshot.params.id === 'new' ? true : false;
    if (this.newTypeExpense) {
      this.typeExpense = new TypeExpense();
      this.buildForm();
    } else {
      this.typeExpenseService.find(this.activatedRoute.snapshot.params.id).subscribe(
        (response: any) => {
          this.typeExpense = response.data;
          this.buildForm();
        }
      )
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      valor: new FormControl(this.typeExpense.valor, Validators.required),
      descripcion: new FormControl(this.typeExpense.descripcion, Validators.required)
    });
  }

  save() {
    if (this.typeExpense.id) {
      this.typeExpense.valor = this.form.get('valor').value;
      this.typeExpense.descripcion = this.form.get('descripcion').value;
      this.typeExpenseService.update(this.typeExpense).subscribe(
        (response: any) => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
          this.back();
        },
        response => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
        }
      );
    } else {
      const typeExpense = Object.assign({}, this.form.value);
      this.typeExpenseService.add(typeExpense).subscribe(
        (response: any) => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
          this.back();
        },
        response => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
        }
      );
    }
  }

  back() {
    this.location.back();
  }

}
