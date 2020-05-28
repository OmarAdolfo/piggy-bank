import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SavingService } from 'src/app/shared/services/saving.service';
import { TemplateService } from '../templates/template.service';
import { Payment } from 'src/app/shared/models/payment';
import { MonthService } from 'src/app/shared/services/month-service.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  savings: number;
  expenses: number;
  percentage: number;
  unpaid: Payment[] = [];
  annualReminders: string[] = [];
  loading: boolean;

  constructor(
    private router: Router,
    private savingService: SavingService,
    private templateService: TemplateService,
    private monthService: MonthService
  ) { }

  ngOnInit(): void {
    Promise.resolve().then(() => this.loading = true);
    combineLatest(
      this.getSavings(),
      this.getAnnualReminders(),
      this.getTemplateActual()
    ).subscribe(
      ([savings, annualRemindersResp, actualTemplate]) => {
        this.savings = savings.data;
        this.expenses = actualTemplate.cuentaGastos;
        this.percentage = actualTemplate.porcentajePagados;
        this.unpaid = actualTemplate.noPagados;
        const annualReminders = annualRemindersResp.data;
        for (let annualReminder of annualReminders) {
          let newDate = new Date(annualReminder.fecha);
          this.annualReminders.push('El pago con nombre <strong>' + annualReminder.nombre + '</strong> fue realizado el mes de ' + this.getMonth(newDate.getMonth() + 1) + ' del año ' + newDate.getFullYear());
        }
        this.loading = false;
      },
      response => {
        this.loading = false;
      }
    );
  }

  getSavings() {
    return this.savingService.getSavings();
  }

  getTemplateActual() {
    return this.templateService.getTemplateActual();
  }

  getAnnualReminders() {
    return this.savingService.getAnnualReminders();
  }

  editTemplate(id: number) {
    this.router.navigate(['/home/templates/' + id]);
  }

  getMonth(value: number) {
    return this.monthService.getMonth(value);
  }

}
