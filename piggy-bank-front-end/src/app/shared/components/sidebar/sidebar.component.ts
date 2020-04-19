import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  optionsMenu = [
    { name: 'Escritorio', icon: 'fas fa-home', url: 'dashboard' },
    { name: 'Gestión de ahorros', icon: 'fas fa-wallet', url: 'savings-management' },
    { name: 'Añadir ahorros', icon: 'fas fa-piggy-bank', url: 'add-savings' },
    { name: 'Plantillas', icon: 'fas fa-file-archive', url: 'templates' },
    { name: 'Gastos mensuales', icon: 'fas fa-dollar-sign' },
    { name: 'Gastos importantes', icon: 'fas fa-money-bill' },
    { name: 'Gastos mensuales', icon: 'fas fa-credit-card' },
    { name: 'Gastos anuales', icon: 'fas fa-coins' },
    { name: 'Ingresos', icon: 'fas fa-file-invoice-dollar' },
    { name: 'Estadísticas', icon: 'fas fa-signal', url: 'stats' },
    { name: 'Ayuda', icon: 'fas fa-question' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
