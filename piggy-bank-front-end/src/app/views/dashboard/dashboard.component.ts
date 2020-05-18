import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SavingService } from 'src/app/shared/services/saving.service';
import { TemplateService } from '../templates/template.service';
import { Payment } from 'src/app/shared/models/payment';
import { MonthService } from 'src/app/shared/services/month-service.service';

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

  constructor(
    private router: Router,
    private savingService: SavingService,
    private templateService: TemplateService,
    private monthService: MonthService
  ) { }

  ngOnInit(): void {
    this.getSavings();
    this.getAnnualReminders();
    this.getTemplateActual();
  }

  getSavings() {
    this.savingService.getSavings().subscribe(
      (response: any) => {
        this.savings = response.data;
      }
    )
  }

  getTemplateActual() {
    this.templateService.getTemplateActual().subscribe(
      (data: any) => {
        this.expenses = data.cuentaGastos;
        this.percentage = data.porcentajePagados;
        this.unpaid = data.noPagados;
      }
    );
  }

  getAnnualReminders() {
    this.savingService.getAnnualReminders().subscribe(
      (response: any) => {
        const annualReminders = response.data;
        for (let annualReminder of annualReminders) {
          let newDate = new Date(annualReminder.fecha);
          this.annualReminders.push('El pago con nombre <strong>' + annualReminder.nombre + '</strong> fue realizado el mes de ' + this.getMonth(newDate.getMonth()) + ' del año ' + newDate.getFullYear());
        }
      }
    )
  }

  editTemplate(id: number) {
    this.router.navigate(['/admin/templates/' + id]);
  }

  getMonth(value: number) {
    return this.monthService.getMonth(value);
  }

}
