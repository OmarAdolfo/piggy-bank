import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/shared/config/api';
import { Observable } from 'rxjs/internal/Observable';
import { MetaSaving } from 'src/app/shared/models/meta-saving';

@Injectable({
  providedIn: 'root'
})
export class MetaSavingService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = API.url + 'meta-ahorros';
  }

  get(form: any, sortable?: string, orderBy?: number): Observable<MetaSaving[]> {
    let params: string[] = [];
    let query = '';
    if (form.nombre) {
      params.push('anno=' + form.anno);
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
    return this.http.get<MetaSaving[]>(this.url + query);
  }

  find(id: number) {
    return this.http.get<Response>(this.url + '/' + id);
  }

  add(metaSaving: MetaSaving): Observable<Response> {
    return this.http.post<Response>(this.url, metaSaving);
  }

  update(metaSaving: MetaSaving, id: number): Observable<Response> {
    return this.http.put<Response>(this.url + '/' + id, metaSaving);
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(this.url + '/' + id);
  }
  
}
