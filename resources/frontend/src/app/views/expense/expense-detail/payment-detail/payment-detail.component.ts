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
  styleUrls: ['./payment-detail.component.scss']
})
export class PaymentDetailComponent implements OnInit {

  newPayment: boolean;
  payment: Payment;
  form: FormGroup;
  es: any;
  loading: boolean;

  constructor(
    private location: Location,
    private paymentService: PaymentService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }
  }

  ngOnInit(): void {
    this.newPayment = this.activatedRoute.snapshot.params.idpayment === 'new' ? true : false;
    if (this.newPayment) {
      this.payment = new Payment();
      this.buildForm();
    } else {
      Promise.resolve().then(() => this.loading = true);
      this.paymentService.find(this.activatedRoute.snapshot.params.idpayment).subscribe(
        (response: any) => {
          this.payment = response.data;
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
      cantidad: new FormControl(this.payment.cantidad, Validators.required),
      fecha: new FormControl(this.payment.fecha, Validators.required)
    });
  }

  back() {
    this.location.back();
  }

  save() {
    Promise.resolve().then(() => this.loading = true);
    if (!this.newPayment) {
      const payment: Payment = Object.assign(this.payment, this.form.value);
      this.paymentService.update(payment).subscribe(
        () => {
          this.loading = false;
          this.back();
        },
        response => {
          this.loading = false;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
        }
      );
    } else {
      const payment: Payment = Object.assign({}, this.form.value);
      payment.gasto_id = this.activatedRoute.snapshot.params.id;
      this.paymentService.add(payment).subscribe(
        () => {
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

}
