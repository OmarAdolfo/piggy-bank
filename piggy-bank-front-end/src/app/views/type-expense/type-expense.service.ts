import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API } from 'src/app/shared/config/api';
import { Observable } from 'rxjs/internal/Observable';
import { TypeExpense } from 'src/app/shared/models/type-expense';

@Injectable({
  providedIn: 'root'
})
export class TypeExpenseService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = API.url + 'tipos-gastos';
  }

  get(valor?: string, sortable?: string, orderBy?: number): Observable<TypeExpense[]> {
    let params: string[] = [];
    let query = '';
    if (valor) {
      params.push('valor=' + valor);
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
    return this.http.get<TypeExpense[]>(this.url + query);
  }

  findAll() {
    return this.http.get<TypeExpense[]>(this.url + '/all');
  }

  add(typeExpense: TypeExpense): Observable<Response> {
    return this.http.post<Response>(this.url, typeExpense);
  }

}
