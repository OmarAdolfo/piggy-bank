import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GoodPractice } from 'src/app/shared/models/good-practice';
import { ActivatedRoute } from '@angular/router';
import { GoodPracticeService } from '../good-practice.service';
import { Location } from '@angular/common';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-good-practice-detail',
  templateUrl: './good-practice-detail.component.html',
  styleUrls: ['./good-practice-detail.component.scss'],
  providers: [MessageService]
})
export class GoodPracticeDetailComponent implements OnInit {

  goodPractice: GoodPractice;
  newGoodPractice: boolean;
  form: FormGroup;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private goodPracticeService: GoodPracticeService,
    private formBuilder: FormBuilder,
    private location: Location,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.newGoodPractice = this.activatedRoute.snapshot.params.id === 'new' ? true : false;
    if (this.newGoodPractice) {
      this.goodPractice = new GoodPractice();
      this.buildForm();
    } else {
      this.goodPracticeService.find(this.activatedRoute.snapshot.params.id).subscribe(
        (response: any) => {
          this.goodPractice = response.data;
          this.buildForm();
        }
      )
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      palabra_clave: new FormControl(this.goodPractice.palabra_clave, Validators.required),
      porcentaje: new FormControl(this.goodPractice.porcentaje, [Validators.required, Validators.max(100), Validators.min(0)])
    });
  }

  save() {
    if (this.goodPractice.id) {
      this.goodPractice.palabra_clave = this.form.get('palabra_clave').value;
      this.goodPractice.porcentaje = this.form.get('porcentaje').value;
      this.goodPracticeService.update(this.goodPractice).subscribe(
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
      this.goodPracticeService.add(typeExpense).subscribe(
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
