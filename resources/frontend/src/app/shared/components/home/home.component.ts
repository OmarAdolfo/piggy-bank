import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Role } from '../../models/role';
import { optionsMenuUser, optionsMenuAdmin } from '../../config/routes.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  optionsMenu = [];

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    if (Role.User.toString() === this.authenticationService.getRol()) {
      this.optionsMenu = optionsMenuUser;
    } else {
      this.optionsMenu = optionsMenuAdmin;
    }
  }

}
