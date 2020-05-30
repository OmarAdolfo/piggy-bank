import { Component, OnInit, HostListener, ɵConsole } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { Role } from '../../models/role';
import { optionsMenuAdmin, optionsMenuUser } from '../../config/routes.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuOptionsLogged = [];
  menuOptionsNoLogged = [];

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService
  ) {
    this.menuOptionsLogged = [
      { name: 'Perfil', url: 'home/profile', icon: 'fas fa-user', logout: false },
      { name: 'Cerrar sesión', url: '', icon: 'fas fa-sign-out-alt', logout: true }
    ];
    this.menuOptionsNoLogged = [
      { name: 'Iniciar sesión', url: '/login', icon: 'fas fa-sign-in-alt', logout: false },
      { name: 'Registrarse', url: '/signin', icon: 'fas fa-user-tag', logout: false }
    ]
  }

  ngOnInit(): void {}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
