import { Component, OnInit } from '@angular/core';
import { Revenue } from 'src/app/shared/models/revenue';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RevenueService } from './revenue.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-revenue-detail',
  templateUrl: './revenue-detail.component.html',
  styleUrls: ['./revenue-detail.component.scss'],
  providers: [MessageService]
})
export class RevenueDetailComponent implements OnInit {

  newRevenue: boolean;
  revenue: Revenue;
  form: FormGroup;
  es: any;

  constructor(
    private location: Location,
    private revenueService: RevenueService,
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
    this.newRevenue = this.activatedRoute.snapshot.params.idrevenue === 'new' ? true : false;
    if (this.newRevenue) {
      this.revenue = new Revenue();
      this.buildForm();
    } else {
      this.revenueService.find(this.activatedRoute.snapshot.params.idrevenue).subscribe(
        (response: any) => {
          this.revenue = response.data;
          this.buildForm();
        }
      )
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      cantidad: new FormControl(this.revenue.cantidad, Validators.required),
      fecha: new FormControl(this.revenue.fecha, Validators.required)
    });
  }

  back() {
    this.location.back();
  }

  save() {
    if (!this.newRevenue) {
      const revenue: Revenue = Object.assign(this.revenue, this.form.value);
      this.revenueService.update(revenue).subscribe(
        () => {
          this.back();
        },
        response => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
        }
      );
    } else {
      const revenue: Revenue = Object.assign({}, this.form.value);
      revenue.ganancia_id = this.activatedRoute.snapshot.params.id;
      this.revenueService.add(revenue).subscribe(
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
