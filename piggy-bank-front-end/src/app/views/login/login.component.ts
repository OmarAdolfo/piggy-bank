import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MessageService } from 'primeng/api';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { LoginService } from './login.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/shared/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService, LoginService],
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;

  constructor(
    @Inject(DOCUMENT) private _document,
    private messageService: MessageService,
    private notificationService: NotificationService,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this._document.body.style.background = '#F9AA33';
    this.buildForm();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const msgs = this.notificationService.getMessages();
      if (msgs.length > 0) {
        msgs.forEach(
          msg => {
            this.messageService.add(msg);
          }
        );
        this.notificationService.clear();
      }
    });
  }

  ngOnDestroy() {
    this._document.body.style.background = '#FFF';
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    const login: Login = Object.assign({}, this.loginForm.value);
    this.loginService.login(login).subscribe(
      (response: any) => {
        this.notificationService.addMessage({ severity: 'success', summary: 'Éxito', detail: response });
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error });
      }
    );
  }

}
