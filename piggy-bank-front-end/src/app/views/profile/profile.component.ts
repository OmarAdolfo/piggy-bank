import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [DatePipe]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  user: any;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.authenticationService.getAuthenticatedUser().subscribe(
      (response: any) => {
        this.user = response.user;
        this.buildForm();
      }
    )
  }

  buildForm() {
    this.profileForm = this.formBuilder.group({
      nombre: new FormControl({ value: this.user.nombre, disabled: true }),
      apellidos: new FormControl({ value: this.user.apellidos, disabled: true }),
      email: new FormControl({ value: this.user.email, disabled: true }),
      fechaCreacion: new FormControl({ value: this.datePipe.transform(this.user.created_at, 'dd-MM-yyyy'), disabled: true })
    });
  }

}
