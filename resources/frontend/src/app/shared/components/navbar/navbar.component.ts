import { Component, OnInit, HostListener, ɵConsole } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuOptions = [];
  collapsed = false;
  logoUrl: string;

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    if (window.innerWidth > 768) {
      this.collapsed = false;
    } else {
      this.collapsed = true;
    }

    this.router.events
      .pipe(
        filter(event => event instanceof RoutesRecognized),
        map((event: RoutesRecognized) => {
          return event.state.root.firstChild.url.join('/');
        }))
      .subscribe(
        url => {
          if (url.includes('home') && this.authenticationService.isLogged()) {
            this.menuOptions = [
              { name: 'Perfil', url: 'home/profile', icon: 'fas fa-user', logout: false },
              { name: 'Cerrar sesión', url: '', icon: 'fas fa-sign-out-alt', logout: true }
            ]
            this.logoUrl = this.authenticationService.getUrlNavigation();
          } else if (url === '') {
            this.menuOptions = [
              { name: 'Iniciar sesión', url: '/login', icon: 'fas fa-sign-in-alt', logout: false },
              { name: 'Registrarse', url: '/signin', icon: 'fas fa-user-tag', logout: false }
            ]
            this.logoUrl = '';
          } else {
            this.menuOptions = [];
            this.logoUrl = '';
          }
        }
      );

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth > 768) {
      document.getElementById('sidenav').style.width = 260 + "px";
      this.showOptionMenu();
    } else {
      this.hideOptionMenu();
    }
  }

  collapseMenu() {
    if (!this.collapsed) {
      this.hideOptionMenu();
    } else {
      if (window.matchMedia("(max-width: 320px)").matches) {
        document.getElementById('sidenav').style.width = 140 + "px";
      } else if (window.matchMedia("(max-width: 375px)").matches) {
        document.getElementById('sidenav').style.width = 160 + "px";
      } else if (window.matchMedia("(max-width: 425px)").matches) {
        document.getElementById('sidenav').style.width = 180 + "px";
      } else if (window.matchMedia("(max-width: 768px)").matches) {
        document.getElementById('sidenav').style.width = 200 + "px";
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        document.getElementById('sidenav').style.width = 260 + "px";
      }
      this.showOptionMenu();
    }
  }

  showOptionMenu() {
    const elms = document.getElementsByClassName('option-menu');
    for (var a = 0; a < elms.length; a++) {
      (elms[a] as HTMLElement).style.display = 'inline';
    }
    this.collapsed = false;
  }

  hideOptionMenu() {
    document.getElementById('sidenav').style.width = 60 + "px";
    const elms = document.getElementsByClassName('option-menu');
    for (var i = 0; i < elms.length; i++) {
      (elms[i] as HTMLElement).style.display = 'none';
    }
    this.collapsed = true;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
