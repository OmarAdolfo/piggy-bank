import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ForgotPasswordService } from './forgot-password.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ResetPassword } from 'src/app/shared/models/resetPassword';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [ForgotPasswordService]
})
export class ForgotPasswordComponent implements OnInit {

  sendTokenEmailForm: FormGroup;
  resetPasswordForm: FormGroup;
  isEmailSent = false;
  loading: boolean;
  passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

  constructor(
    @Inject(DOCUMENT) private _document,
    private forgotPasswordService: ForgotPasswordService,
    private messageService: MessageService,
    private router: Router,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this._document.body.style.background = '#F9AA33';
    this.buildForm();
  }

  buildForm() {
    this.sendTokenEmailForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    this.resetPasswordForm = this.formBuilder.group({
      token: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern(this.passwordRegex)])
    });
  }

  ngOnDestroy() {
    this._document.body.style.background = '#F7F8FB';
  }

  getTokenByEmail() {
    Promise.resolve().then(() => this.loading = true);
    this.forgotPasswordService.getTokenByEmail(this.sendTokenEmailForm.get('email').value).subscribe(
      (response: any) => {
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message});
        this.isEmailSent = true;
        this.loading = false;
      },
      response => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
      }
    );
  }

  ressetPassword() {
    Promise.resolve().then(() => this.loading = true);
    const resetPassword: ResetPassword = Object.assign({}, this.resetPasswordForm.value);
    resetPassword.email = this.sendTokenEmailForm.get('email').value;
    this.forgotPasswordService.resetPassword(resetPassword).subscribe(
      (response: any) => {
        this.loading = false;
        this.notificationService.addMessage({ severity: 'success', summary: 'Éxito', detail: response.message });
        this.router.navigate(['login']);
      },
      response => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
      }
    );
  }

}
