import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/shared/config/api';
import { Observable } from 'rxjs/internal/Observable';
import { TypeSaving } from 'src/app/shared/models/type-saving';

@Injectable({
  providedIn: 'root'
})
export class TypeSavingService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = API.url + 'tipos-ahorros';
  }

  get(valor?: string, sortable?: string, orderBy?: number): Observable<TypeSaving[]> {
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
    return this.http.get<TypeSaving[]>(this.url + query);
  }

  add(typeSaving: TypeSaving): Observable<Response> {
    return this.http.post<Response>(this.url, typeSaving);
  }
  
}
