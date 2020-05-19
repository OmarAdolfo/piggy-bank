import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { MetaSaving } from 'src/app/shared/models/meta-saving';
import { Location } from '@angular/common';
import { MetaSavingService } from '../meta-saving.service';

@Component({
  selector: 'app-meta-saving-detail',
  templateUrl: './meta-saving-detail.component.html',
  styleUrls: ['./meta-saving-detail.component.scss']
})
export class MetaSavingDetailComponent implements OnInit {

  form: FormGroup;
  newMetaSaving: boolean;
  metaSaving: MetaSaving;
  annoRegex = /^(\d{4})$/;
  loading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private metasavingService: MetaSavingService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.newMetaSaving = this.activatedRoute.snapshot.params.id === 'new' ? true : false;
    if (this.newMetaSaving) {
      this.metaSaving = new MetaSaving();
      this.buildForm();
    } else {
      Promise.resolve().then(() => this.loading = true);
      this.metasavingService.find(this.activatedRoute.snapshot.params.id).subscribe(
        (response: any) => {
          this.metaSaving = response.data;
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
      anno: new FormControl(this.metaSaving.anno, [Validators.required, Validators.pattern(this.annoRegex)]),
      cantidad: new FormControl(this.metaSaving.cantidad, [Validators.required])
    });
  }

  save() {
    Promise.resolve().then(() => this.loading = true);
    if (this.metaSaving.id) {
      const metaSaving = Object.assign(this.metaSaving, this.form.value);
      this.metasavingService.update(metaSaving, this.metaSaving.id).subscribe(
        (response: any) => {
          this.loading = false;
          this.back();
        },
        response => {
          this.loading = false;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
        }
      );
    } else {
      const metaSaving: MetaSaving = Object.assign({}, this.form.value);
      this.metasavingService.add(metaSaving).subscribe(
        (response: any) => {
          this.loading = false;
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
