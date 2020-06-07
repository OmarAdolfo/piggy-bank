import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Profit } from 'src/app/shared/models/profit';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfitService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.url + 'ganancias';
  }

  findAllMonthlyProfits(): Observable<any> {
    return this.http.get<Profit[]>(this.url + '-mensuales');
  }

  get(form: any, sortable?: string, orderBy?: number, page?: number): Observable<Profit[]> {
    let params: string[] = [];
    let query = '';
    if (form.nombre) {
      params.push('nombre=' + form.nombre);
    }
    if (form.id_tipo_ganancia) {
      params.push('id_tipo_ganancia=' + form.id_tipo_ganancia.id);
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
    return this.http.get<Profit[]>(this.url + query);
  }

  find(id: number) {
    return this.http.get<Response>(this.url + '/' + id);
  }

  add(profit: Profit): Observable<Response> {
    return this.http.post<Response>(this.url, profit);
  }

  update(profit: Profit, id: number): Observable<Response> {
    return this.http.put<Response>(this.url + '/' + id, profit);
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(this.url + '/' + id);
  }
  
}
