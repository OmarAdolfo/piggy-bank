import { Component, OnInit } from '@angular/core';
import { TypeExpense } from 'src/app/shared/models/type-expense';
import { TypeExpenseService } from '../type-expense.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MessageService } from 'primeng/api';
import { noWhitespaceValidator } from 'src/app/shared/validators/nowhitespace.validator';

@Component({
  selector: 'app-type-expense-detail',
  templateUrl: './type-expense-detail.component.html',
  styleUrls: ['./type-expense-detail.component.scss']
})
export class TypeExpenseDetailComponent implements OnInit {

  typeExpense: TypeExpense;
  newTypeExpense: boolean;
  form: FormGroup;
  loading: boolean;

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
      Promise.resolve().then(() => this.loading = true);
      this.typeExpenseService.find(this.activatedRoute.snapshot.params.id).subscribe(
        (response: any) => {
          this.typeExpense = response.data;
          this.loading = false;
          this.buildForm();
        },
        response => {
          this.loading = false;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
        }
      )
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      valor: new FormControl(this.typeExpense.valor, [Validators.required, noWhitespaceValidator]),
      descripcion: new FormControl(this.typeExpense.descripcion, [Validators.required, noWhitespaceValidator])
    });
  }

  save() {
    Promise.resolve().then(() => this.loading = true);
    if (this.typeExpense.id) {
      this.typeExpense.valor = this.form.get('valor').value;
      this.typeExpense.descripcion = this.form.get('descripcion').value;
      this.typeExpenseService.update(this.typeExpense).subscribe(
        (response: any) => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
          this.loading = false;
          this.back();
        },
        response => {
          this.loading = false;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
        }
      );
    } else {
      const typeExpense = Object.assign({}, this.form.value);
      this.typeExpenseService.add(typeExpense).subscribe(
        (response: any) => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
          this.loading = false;
          this.back();
        },
        response => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
          this.loading = false;
        }
      );
    }
  }

  back() {
    this.location.back();
  }

}
