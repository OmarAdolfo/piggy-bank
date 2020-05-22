import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { TypeExpense } from 'src/app/shared/models/type-expense';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeExpenseService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.url + 'tipos-gastos';
  }

  get(form?: any, sortable?: string, orderBy?: number, page?: number): Observable<TypeExpense[]> {
    let params: string[] = [];
    let query = '';
    if (form.valor) {
      params.push('valor=' + form.valor);
    }
    if (form.descripcion) {
      params.push('descripcion=' + form.descripcion);
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
    return this.http.get<TypeExpense[]>(this.url + query);
  }

  findAll() {
    return this.http.get<TypeExpense[]>(this.url + '/all');
  }

  add(typeExpense: TypeExpense): Observable<Response> {
    return this.http.post<Response>(this.url, typeExpense);
  }

  update(typeExpense: TypeExpense): Observable<Response> {
    return this.http.put<Response>(this.url + '/' + typeExpense.id, typeExpense);
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(this.url + '/' + id);
  }

  find(id: number) {
    return this.http.get<Response>(this.url + '/' + id);
  }

}
