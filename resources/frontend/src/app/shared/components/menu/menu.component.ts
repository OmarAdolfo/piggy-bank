import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Role } from '../../models/role';
import { optionsMenuAdmin, optionsMenuUser } from '../../config/routes.config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuItems: object;

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    if (this.authenticationService.getRol() === Role.Admin) {
      this.menuItems = optionsMenuAdmin;
    } else {
      this.menuItems = optionsMenuUser;
    }
  }

  navigate(path: string) {
    this.router.navigate(['home/' + path]);
  }

}
