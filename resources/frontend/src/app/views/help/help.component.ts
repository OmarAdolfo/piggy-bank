import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/shared/models/role';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  pdfSrc: any;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    if (Role.User.toString() === this.authenticationService.getRol()) {
      this.pdfSrc = "assets/Guía de usuario normal.pdf";
    } else {
      this.pdfSrc = "assets/Guía de usuario administrador.pdf";
    }
  }

}
