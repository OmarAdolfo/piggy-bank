import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { confirmPasswordValidator } from 'src/app/shared/validators/confirmpassword.validator';
import { SignIn } from 'src/app/shared/models/signin';
import { SigninService } from './signin.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [SigninService, MessageService]
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  constructor(
    @Inject(DOCUMENT) private _document,
    private formBuilder: FormBuilder,
    private signinService: SigninService,
    private notificationService: NotificationService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._document.body.style.background = '#F9AA33';
    this.buildForm();
  }

  buildForm() {
    this.signinForm = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      repeatPassword: new FormControl('', Validators.required)
    });

    this.signinForm.get('repeatPassword').setValidators(
      confirmPasswordValidator(this.signinForm.get('password'))
    );

    this.signinForm.get('password').valueChanges.subscribe(
      () => this.signinForm.get('repeatPassword').setValue('')
    )
  }

  ngOnDestroy() {
    this._document.body.style.background = '#F7F8FB';
  }

  signin() {
    const signIn: SignIn = Object.assign({}, this.signinForm.value);
    this.signinService.signIn(signIn).subscribe(
      (response: any) => {
        this.notificationService.addMessage({ severity: 'success', summary: 'Éxito', detail: response });
        this.router.navigate(['login']);
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error });
      }
    )
  }

}
