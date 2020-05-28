import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/api';
import { User } from 'src/app/shared/models/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { Role } from 'src/app/shared/models/role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  form: FormGroup;
  users: User[];
  cols: any[];
  roles: any[];
  totalRecords: number;
  loading: boolean;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellidos', header: 'Apellidos' },
      { field: 'email', header: 'Correo electrónico' },
      { field: 'rol', header: 'Rol' },
      { field: '', header: 'Opciones' }
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

  add() {
    this.router.navigate(['/home/users/new']);
  }

  search(sortable?: string, orderBy?: number, page?: number) {
    Promise.resolve().then(() => this.loading = true);
    this.userService.get(this.form.value, sortable, orderBy, page).subscribe(
      (response: any) => {
        const array: User[] = response.data.data;
        this.users = array;
        this.totalRecords = response.data.total;
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  customSort(eve: LazyLoadEvent) {
    const sortable = eve.sortField;
    const orderBy = eve.sortOrder;
    const page = (eve.first / eve.rows) + 1;
    this.search(sortable, orderBy, page);
  }

  confirm(id: number) {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que deseas borrar?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete(id);
      }
    });
  }

  delete(id: number) {
    this.userService.delete(id).subscribe(
      (response: any) => {
        this.users = this.users.filter(user => user.id !== id);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message })
      },
      response => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message })
      }
    );
  }

  onRowSelect(id: number) {
    this.router.navigate(['/home/users/' + id]);
  }

}
