import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { confirmPasswordValidator } from 'src/app/shared/validators/confirmpassword.validator';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [DatePipe, MessageService]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  newPasswordForm: FormGroup;
  user: any;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private messageService: MessageService
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

    this.newPasswordForm = this.formBuilder.group({
      password: new FormControl('', Validators.required),
      repeatPassword: new FormControl('', Validators.required)
    });

    this.newPasswordForm.get('repeatPassword').setValidators(
      confirmPasswordValidator(this.newPasswordForm.get('password'))
    );

    this.newPasswordForm.get('password').valueChanges.subscribe(
      () => this.newPasswordForm.get('repeatPassword').setValue('')
    )
  }

  resetPassword() {
    const password = { password: this.newPasswordForm.get('password').value };
    this.authenticationService.changePassword(password).subscribe(
      data => {
        this.authenticationService.saveToken(data);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Se ha modificado la contraseña' });
      }
    )
  }

}
