import { Injectable } from '@angular/core';
import { GoodPractice } from 'src/app/shared/models/good-practice';
import { Observable } from 'rxjs/internal/Observable';
import { API } from 'src/app/shared/config/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoodPracticeService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = API.url + 'buenas-practicas';
  }

  get(form?: any, sortable?: string, orderBy?: number, page?: number): Observable<GoodPractice[]> {
    let params: string[] = [];
    let query = '';
    if (form.palabraClave) {
      params.push('palabraClave=' + form.palabraClave);
    }
    if (form.porcentaje) {
      params.push('porcentaje=' + form.porcentaje);
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
    return this.http.get<GoodPractice[]>(this.url + query);
  }

  add(goodPractice: GoodPractice): Observable<Response> {
    return this.http.post<Response>(this.url, goodPractice);
  }

  update(goodPractice: GoodPractice): Observable<Response> {
    return this.http.put<Response>(this.url + '/' + goodPractice.id, goodPractice);
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(this.url + '/' + id);
  }

  findAll(): Observable<any> {
    return this.http.get<GoodPractice[]>(this.url + '/all');
  }

  find(id: number) {
    return this.http.get<Response>(this.url + '/' + id);
  }

}
