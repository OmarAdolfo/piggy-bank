import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { Role } from 'src/app/shared/models/role';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { noWhitespaceValidator } from 'src/app/shared/validators/nowhitespace.validator';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  providers: [MessageService]
})
export class UserDetailComponent implements OnInit {

  user: User;
  roles: any[];
  form: FormGroup;
  newUser: boolean;
  loading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.roles = [
      { label: Role.Admin, value: Role.Admin.toString() },
      { label: Role.User, value: Role.User.toString() },
    ]
  }

  ngOnInit(): void {
    this.newUser = this.activatedRoute.snapshot.params.id === 'new' ? true : false;
    if (this.newUser) {
      this.user = new User();
      this.buildForm();
    } else {
      Promise.resolve().then(() => this.loading = true);
      this.userService.find(this.activatedRoute.snapshot.params.id).subscribe(
        (response: any) => {
          this.user = response.data;
          this.loading = false;
          this.buildForm();
        },
        response => {
          this.loading = false;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
        }
      )
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      nombre: new FormControl(this.user.nombre, [Validators.required, noWhitespaceValidator]),
      apellidos: new FormControl(this.user.apellidos, [Validators.required, noWhitespaceValidator]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      rol: new FormControl(this.user.rol, Validators.required)
    });
  }

  save() {
    Promise.resolve().then(() => this.loading = true);
    if (this.user.id) {
      this.user.nombre = this.form.get('nombre').value;
      this.user.apellidos = this.form.get('apellidos').value;
      this.user.email = this.form.get('email').value;
      this.user.rol = this.form.get('rol').value;
      this.userService.update(this.user).subscribe(
        (response: any) => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
          this.loading = false;
          this.back();
        },
        response => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
          this.loading = false;
        }
      );
    } else {
      const user = Object.assign({}, this.form.value);
      this.userService.add(user).subscribe(
        (response: any) => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
          this.loading = false;
          this.back();
        },
        response => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
          this.loading = false;
        }
      );
    }
  }

  back() {
    this.location.back();
  }

}
