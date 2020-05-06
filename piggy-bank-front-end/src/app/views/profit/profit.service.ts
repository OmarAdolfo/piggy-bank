import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/shared/config/api';
import { Profit } from 'src/app/shared/models/profit';

@Injectable({
  providedIn: 'root'
})
export class ProfitService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = API.url + 'ganancias';
  }

  findAllMonthlyProfits(): Observable<any> {
    return this.http.get<Profit[]>(this.url + '-mensuales');
  }

  get(form: any, sortable?: string, orderBy?: number): Observable<Profit[]> {
    let params: string[] = [];
    let query = '';
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
