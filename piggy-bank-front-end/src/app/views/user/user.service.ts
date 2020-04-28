import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { API } from 'src/app/shared/config/api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = API.url + 'usuarios';
  }

  get(nombre?: string, apellidos?: string, email?: string, rol?: string, sortable?: string, orderBy?: number): Observable<User[]> {
    let params: string[] = [];
    let query = '';
    if (nombre) {
      params.push('nombre=' + nombre);
    }
    if (apellidos) {
      params.push('apellidos=' + apellidos);
    }
    if (email) {
      params.push('email=' + email);
    }
    if (rol) {
      params.push('rol=' + rol);
    }
    if (sortable) {
      params.push('sortable=' + sortable);
      if (orderBy) {
        params.push(orderBy === 1 ? 'orderBy=asc' : 'orderBy=desc');
      }
    }
    if (params) {
      query = '?' + params.join('&');
    }
    return this.http.get<User[]>(this.url + query);
  }

  add(user: User): Observable<Response> {
    return this.http.post<Response>(this.url, user);
  }

  update(user: User): Observable<Response> {
    return this.http.put<Response>(this.url + '/' + user.id, user);
  }

  delete(user: User): Observable<Response> {
    return this.http.delete<Response>(this.url + '/' + user.id);
  }

}
