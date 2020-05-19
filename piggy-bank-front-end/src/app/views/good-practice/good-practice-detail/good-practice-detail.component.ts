import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GoodPractice } from 'src/app/shared/models/good-practice';
import { ActivatedRoute } from '@angular/router';
import { GoodPracticeService } from '../good-practice.service';
import { Location } from '@angular/common';
import { MessageService } from 'primeng/api';
import { noWhitespaceValidator } from 'src/app/shared/validators/nowhitespace.validator';

@Component({
  selector: 'app-good-practice-detail',
  templateUrl: './good-practice-detail.component.html',
  styleUrls: ['./good-practice-detail.component.scss']
})
export class GoodPracticeDetailComponent implements OnInit {

  goodPractice: GoodPractice;
  newGoodPractice: boolean;
  form: FormGroup;
  loading: boolean;

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
      Promise.resolve().then(() => this.loading = true);
      this.goodPracticeService.find(this.activatedRoute.snapshot.params.id).subscribe(
        (response: any) => {
          this.goodPractice = response.data;
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
      palabra_clave: new FormControl(this.goodPractice.palabra_clave, [Validators.required, noWhitespaceValidator]),
      porcentaje: new FormControl(this.goodPractice.porcentaje, [Validators.required, Validators.max(100), Validators.min(0)])
    });
  }

  save() {
    Promise.resolve().then(() => this.loading = true);
    if (this.goodPractice.id) {
      this.goodPractice.palabra_clave = this.form.get('palabra_clave').value;
      this.goodPractice.porcentaje = this.form.get('porcentaje').value;
      this.goodPracticeService.update(this.goodPractice).subscribe(
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
      this.goodPracticeService.add(typeExpense).subscribe(
        (response: any) => {
          this.loading = false;
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
          this.back();
        },
        response => {
          this.loading = false;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
        }
      );
    }
  }

  back() {
    this.location.back();
  }

}
