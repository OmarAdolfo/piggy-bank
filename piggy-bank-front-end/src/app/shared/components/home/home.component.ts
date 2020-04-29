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

  optionsMenuUser = [
    { name: 'Escritorio', icon: 'fas fa-home', url: 'dashboard' },
    { name: 'Gastos', icon: 'fas fa-dollar-sign', url: 'expenses' },
    { name: 'Gestión de ahorros', icon: 'fas fa-wallet', url: 'savings-management' },
    { name: 'Añadir ahorros', icon: 'fas fa-piggy-bank', url: 'add-savings' },
    { name: 'Plantillas', icon: 'fas fa-file-archive', url: 'templates' },
    { name: 'Ingresos', icon: 'fas fa-file-invoice-dollar' },
    { name: 'Estadísticas', icon: 'fas fa-signal', url: 'stats' },
    { name: 'Ayuda', icon: 'fas fa-question' }
  ]

  optionsMenuAdmin = [
    { name: 'Usuarios', icon: 'fas fa-users', url: 'users' },
    { name: 'Tipos de gastos', icon: 'fas fa-dollar-sign', url: 'type-expense' },
    { name: 'Tipos de ahorros', icon: 'fas fa-wallet', url: 'type-saving' },
    { name: 'Buenas prácticas', icon: 'fas fa-coins', url: 'good-practices' }
  ]

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    if (Role.User.toString() === this.authenticationService.getRol()) {
      this.optionsMenu = this.optionsMenuUser;
    } else {
      this.optionsMenu = this.optionsMenuAdmin;
    }
  }

}
