import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/api';
import { User } from 'src/app/shared/models/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { Role } from 'src/app/shared/models/role';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class UserComponent implements OnInit {

  form: FormGroup;
  users: User[];
  cols: any[];
  roles: any[];
  displayDialog: boolean;
  newUser: boolean;
  user: User;
  selectedUser: User;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellidos', header: 'Apellidos' },
      { field: 'email', header: 'Correo electrónico' },
      { field: 'rol', header: 'Rol' },
      { field: 'created_at', header: 'Fecha de creación' },
      { field: 'updated_at', header: 'Fecha de actualización' }
    ];
    this.roles = [
      { label: Role.Admin, value: Role.Admin.toString() },
      { label: Role.User, value: Role.User.toString() },
    ]
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      email: new FormControl(''),
      rol: new FormControl('')
    });
  }

  save() {
    if (this.user.id) {
      this.userService.update(this.user).subscribe(
        (response: any) => {
          let users = [...this.users];
          users[this.users.indexOf(this.selectedUser)] = this.user;
          this.users = users;
          this.user = null;
          this.displayDialog = false;
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
        }
      );
    } else {
      this.userService.add(this.user).subscribe(
        (response: any) => {
          let users = [...this.users];
          users.push(response.data);
          this.users = users;
          this.user = null;
          this.displayDialog = false;
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
        }
      );
    }
  }

  showDialogToAdd() {
    this.newUser = true;
    this.user = new User();
    this.displayDialog = true;
  }

  search(sortable?: string, orderBy?: number) {
    this.userService.get(this.form.get('nombre').value, this.form.get('apellidos').value, this.form.get('email').value, this.form.get('rol').value, sortable, orderBy).subscribe(
      (response: any) => {
        const array: User[] = response.data.data;
        this.users = array;
      }
    );
  }

  customSort(eve: LazyLoadEvent) {
    const sortable = eve.sortField;
    const orderBy = eve.sortOrder;
    this.search(sortable, orderBy);
  }

  confirm() {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que deseas borrar?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete();
      }
    });
  }

  delete() {
    this.userService.delete(this.user).subscribe(
      () => {
        let index = this.users.indexOf(this.selectedUser);
        this.users = this.users.filter((val, i) => i != index);
        this.user = null;
        this.displayDialog = false;
      }
    );
  }

  onRowSelect(event) {
    this.newUser = false;
    this.user = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: User) {
    let user = new User();
    for (let prop in c) {
      user[prop] = c[prop];
    }
    return user;
  }

}
