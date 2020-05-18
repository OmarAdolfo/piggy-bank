import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.url + 'usuarios';
  }

  get(form?: any, sortable?: string, orderBy?: number, page?: number): Observable<User[]> {
    let params: string[] = [];
    let query = '';
    if (form.nombre) {
      params.push('nombre=' + form.nombre);
    }
    if (form.apellidos) {
      params.push('apellidos=' + form.apellidos);
    }
    if (form.email) {
      params.push('email=' + form.email);
    }
    if (form.rol) {
      params.push('rol=' + form.rol);
    }
    if (sortable) {
      params.push('sortable=' + sortable);
      if (orderBy) {
        params.push(orderBy === 1 ? 'orderBy=asc' : 'orderBy=desc');
      }
    }
    if (page) {
      params.push('page=' + page);
    }
    if (params.length > 0) {
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

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(this.url + '/' + id);
  }

  find(id: number) {
    return this.http.get<Response>(this.url + '/' + id);
  }

}
