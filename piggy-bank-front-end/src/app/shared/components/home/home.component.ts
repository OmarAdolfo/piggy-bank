import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Role } from '../../models/role';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  optionsMenu = [];
  url: string;

  optionsMenuUser = [
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

  optionsMenuAdmin = [
    { name: 'Escritorio', icon: 'fas fa-home', url: 'dashboard' }
  ]

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    if (Role.User.toString() === this.authenticationService.getUser().rol) {
      this.optionsMenu = this.optionsMenuUser;
    } else {
      this.optionsMenu = this.optionsMenuAdmin;
    }
  }

}
