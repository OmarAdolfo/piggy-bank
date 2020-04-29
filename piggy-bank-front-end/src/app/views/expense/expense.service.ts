import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Expense } from 'src/app/shared/models/expense';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/shared/config/api';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = API.url + 'gastos';
  }

  get(form: any, sortable?: string, orderBy?: number): Observable<Expense[]> {
    let params: string[] = [];
    let query = '';
    console.log(form.nombre);
    if (form.nombre) {
      params.push('nombre=' + form.nombre);
    }
    if (form.tipo_gasto) {
      params.push('tipo_gasto=' + form.tipo_gasto.id);
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
    return this.http.get<Expense[]>(this.url + query);
  }

  find(id: number) {
    return this.http.get<Response>(this.url + '/' + id);
  }

  add(expense: Expense): Observable<Response> {
    return this.http.post<Response>(this.url, expense);
  }

  update(expense: Expense, id: number): Observable<Response> {
    return this.http.put<Response>(this.url + '/' + id, expense);
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(this.url + '/' + id);
  }

}
