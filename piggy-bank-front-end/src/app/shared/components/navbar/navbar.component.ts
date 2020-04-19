import { Component, OnInit, HostListener, ɵConsole } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuOptions = [];
  isLogged = false;
  collapsed = false;
  logoUrl: string;

  constructor(
    private router: Router
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
          if (url.includes('admin')) {
            this.menuOptions = [
              { name: 'Perfil', url: '', icon: 'fas fa-user' },
              { name: 'Cerrar sesión', url: '/home', icon: 'fas fa-sign-out-alt' }
            ]
            this.isLogged = true;
            this.logoUrl = '/admin/dashboard';
          } else if (url.includes('home')) {
            this.menuOptions = [
              { name: 'Iniciar sesión', url: '/login', icon: 'fas fa-sign-in-alt' },
              { name: 'Registrarse', url: '/signin', icon: 'fas fa-user-tag' }
            ]
            this.isLogged = false;
            this.logoUrl = 'home';
          } else {
            this.menuOptions = [];
            this.isLogged = false;
            this.logoUrl = 'home';
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

}
