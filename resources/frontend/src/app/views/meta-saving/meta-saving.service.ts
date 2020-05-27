import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { MetaSaving } from 'src/app/shared/models/meta-saving';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MetaSavingService {

  url: string;
  urlYearlySaving: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.url + 'meta-ahorros';
    this.urlYearlySaving = environment.url + 'ahorros-anuales';
  }

  get(form: any, sortable?: string, orderBy?: number, page?: number): Observable<MetaSaving[]> {
    let params: string[] = [];
    let query = '';
    if (form.anno) {
      params.push('anno=' + form.anno);
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

  getYearlySaving(): Observable<Response> {
    return this.http.get<Response>(this.urlYearlySaving);
  }
  
}
