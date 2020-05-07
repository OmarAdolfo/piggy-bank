import { Component, OnInit } from '@angular/core';
import { MonthService } from 'src/app/shared/services/month-service.service';
import { StatsService } from './stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  data: any;
  data2: any;
  data3: any;
  years: any[];
  colors: string[] = [
    '#6D960E',
    '#C9A452',
    '#95280E',
    '#7A15C6',
    '#5DC25B',
    '#599BA5',
    '#6B552B'
  ]
  colorIndex = 0;

  options = {
    responsive: false,
    maintainAspectRatio: false
  };

  constructor(
    private monthService: MonthService,
    private statsService: StatsService
  ) { }

  ngOnInit(): void {
    this.statsService.getStats().subscribe(
      (response: any) => {
        this.calculateStatsByMonthAndYear(response.pagosmes, response.ingresosmes);
        this.data2 = {
          labels: ['Ganancias', 'Gastos'],
          datasets: [
            {
              data: [response.ingresos, response.pagos],
              backgroundColor: [
                "#FF6384",
                "#9CCC65"
              ],
              hoverBackgroundColor: [
                "#FF6384",
                "#9CCC65"
              ]
            }]
        };
        this.calculateStatsExpenses(response.gastos);
      }
    )
  }

  calculateStatsByMonthAndYear(pagos: any, ingresos: any) {
    const dataPagos = [];
    const dataIngresos = [];
    for (let i = 1; i <= 12; i++) {
      const resultPago = pagos.find(pago => pago.mes === i);
      if (resultPago) {
        dataPagos.push(resultPago.total);
      } else {
        dataPagos.push(0);
      }
      const resultIngreso = ingresos.find(ingreso => ingreso.mes === i);
      if (resultIngreso) {
        dataIngresos.push(resultIngreso.total);
      } else {
        dataIngresos.push(0);
      }
    }
    this.data = {
      labels: this.monthService.getMonths().map(month => month.name),
      datasets: [
        {
          label: 'Gastos',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: dataPagos
        },
        {
          label: 'Ingresos',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: dataIngresos
        }
      ]
    };
  }

  calculateStatsExpenses(gastos: any) {
    const labels = [];
    const amounts = [];
    const backgroundColor = [];
    const hoverBackgroundColor = [];

    for (let gasto of gastos) {
      labels.push(gasto.nombre);
      amounts.push(gasto.total);
      const color = this.getRandomColor();
      backgroundColor.push(color);
      hoverBackgroundColor.push(color);
    }
    
    this.data3 = {
      labels: labels,
      datasets: [
        {
          data: amounts,
          backgroundColor: backgroundColor,
          hoverBackgroundColor: hoverBackgroundColor
        }]
    };
  }

  getRandomColor() {
    const color = this.colors[this.colorIndex];
    if (this.colorIndex === this.colors.length - 1) {
      this.colorIndex = 0
    } else {
      this.colorIndex++;
    }
    return color;
  }

}
