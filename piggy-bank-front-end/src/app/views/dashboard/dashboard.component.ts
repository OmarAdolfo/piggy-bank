import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SavingService } from 'src/app/shared/services/saving.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  savings: number;
  annualReminders: string[] = [];
  monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  constructor(
    private router: Router,
    private savingService: SavingService
  ) { }

  ngOnInit(): void {
    this.getSavings();
    this.getAnnualReminders();
  }

  getSavings() {
    this.savingService.getSavings().subscribe(
      (response: any) => {
        this.savings = response.data;
      }
    )
  }

  getAnnualReminders() {
    this.savingService.getAnnualReminders().subscribe(
      (response: any) => {
        const annualReminders = response.data;
        for (let annualReminder of annualReminders) {
          let newDate = new Date(annualReminder.fecha);
          this.annualReminders.push('El pago con nombre <strong>' + annualReminder.nombre + '</strong> fue realizado el mes de ' + this.monthNames[newDate.getMonth()] + ' del año ' + newDate.getFullYear());
        }
      }
    )
  }

  editTemplate() {
    this.router.navigate(['/admin/templates/1']);
  }

}
