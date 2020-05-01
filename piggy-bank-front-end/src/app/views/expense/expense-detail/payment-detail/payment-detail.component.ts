import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PaymentService } from './payment.service';
import { ActivatedRoute } from '@angular/router';
import { Payment } from 'src/app/shared/models/payment';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.scss'],
  providers: [MessageService]
})
export class PaymentDetailComponent implements OnInit {

  newPayment: boolean;
  payment: Payment;
  form: FormGroup;

  constructor(
    private location: Location,
    private paymentService: PaymentService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.newPayment = this.activatedRoute.snapshot.params.idpayment === 'new' ? true : false;
    if (this.newPayment) {
      this.payment = new Payment();
      this.buildForm();
    } else {
      this.paymentService.find(this.activatedRoute.snapshot.params.idpayment).subscribe(
        (response: any) => {
          this.payment = response.data;
          this.buildForm();
        }
      )
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      cantidad: new FormControl(this.payment.cantidad, Validators.required),
      fecha: new FormControl(this.payment.fecha, Validators.required)
    });

    this.form.get('cantidad').valueChanges.subscribe(
      (data: string) => {
        if (data && data.includes(',')) {
          this.form.get('cantidad').setValue(data.replace(',', '.'), { emitEvent: false });
        }
      }
    )
  }

  back() {
    this.location.back();
  }

  save() {
    if (this.payment.id) {
      const payment: Payment = Object.assign(this.payment, this.form.value);
      this.paymentService.update(payment, this.payment.id).subscribe(
        () => {
          this.back();
        },
        response => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
        }
      );
    } else {
      const payment: Payment = Object.assign({}, this.form.value);
      payment.gasto_id = this.activatedRoute.snapshot.params.id;
      this.paymentService.add(payment).subscribe(
        () => {
          this.back();
        },
        response => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
        }
      );
    }
  }

}
