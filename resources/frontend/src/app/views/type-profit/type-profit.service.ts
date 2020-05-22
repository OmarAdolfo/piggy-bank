import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { TypeProfit } from 'src/app/shared/models/type-profit';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeProfitService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.url + 'tipos-ganancias';
  }

  get(form?: any, sortable?: string, orderBy?: number, page?: number): Observable<TypeProfit[]> {
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
    return this.http.get<TypeProfit[]>(this.url + query);
  }

  add(typeProfit: TypeProfit): Observable<Response> {
    return this.http.post<Response>(this.url, typeProfit);
  }

  findAll() {
    return this.http.get<TypeProfit[]>(this.url + '/all');
  }

  update(typeProfit: TypeProfit): Observable<Response> {
    return this.http.put<Response>(this.url + '/' + typeProfit.id, typeProfit);
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(this.url + '/' + id);
  }

  find(id: number) {
    return this.http.get<Response>(this.url + '/' + id);
  }
  
}
