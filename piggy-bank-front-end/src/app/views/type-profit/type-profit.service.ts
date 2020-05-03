import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/shared/config/api';
import { Observable } from 'rxjs/internal/Observable';
import { TypeProfit } from 'src/app/shared/models/type-profit';

@Injectable({
  providedIn: 'root'
})
export class TypeProfitService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = API.url + 'tipos-ganancias';
  }

  get(valor?: string, sortable?: string, orderBy?: number): Observable<TypeProfit[]> {
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
    return this.http.get<TypeProfit[]>(this.url + query);
  }

  add(typeProfit: TypeProfit): Observable<Response> {
    return this.http.post<Response>(this.url, typeProfit);
  }

  findAll() {
    return this.http.get<TypeProfit[]>(this.url + '/all');
  }
  
}
