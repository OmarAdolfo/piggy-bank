import { Component, OnInit } from '@angular/core';
import { TypeProfit } from 'src/app/shared/models/type-profit';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TypeProfitService } from '../type-profit.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-type-profit-detail',
  templateUrl: './type-profit-detail.component.html',
  styleUrls: ['./type-profit-detail.component.scss'],
  providers: [MessageService]
})
export class TypeProfitDetailComponent implements OnInit {

  typeProfit: TypeProfit;
  newTypeProfit: boolean;
  form: FormGroup;

  constructor(
    private typeProfitService: TypeProfitService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.newTypeProfit = this.activatedRoute.snapshot.params.id === 'new' ? true : false;
    if (this.newTypeProfit) {
      this.typeProfit = new TypeProfit();
      this.buildForm();
    } else {
      this.typeProfitService.find(this.activatedRoute.snapshot.params.id).subscribe(
        (response: any) => {
          this.typeProfit = response.data;
          this.buildForm();
        }
      )
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      valor: new FormControl(this.typeProfit.valor, Validators.required),
      descripcion: new FormControl(this.typeProfit.descripcion, Validators.required)
    });
  }

  save() {
    if (this.typeProfit.id) {
      this.typeProfit.valor = this.form.get('valor').value;
      this.typeProfit.descripcion = this.form.get('descripcion').value;
      this.typeProfitService.update(this.typeProfit).subscribe(
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
      this.typeProfitService.add(typeExpense).subscribe(
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
