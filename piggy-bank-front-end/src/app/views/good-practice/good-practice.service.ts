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

  get(palabraClave?: string, porcentaje?: string, sortable?: string, orderBy?: number): Observable<GoodPractice[]> {
    let params: string[] = [];
    let query = '';
    if (palabraClave) {
      params.push('palabraClave=' + palabraClave);
    }
    if (porcentaje) {
      params.push('porcentaje=' + porcentaje);
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
    return this.http.get<GoodPractice[]>(this.url + query);
  }

  add(goodPractice: GoodPractice): Observable<Response> {
    return this.http.post<Response>(this.url, goodPractice);
  }

  update(goodPractice: GoodPractice): Observable<Response> {
    return this.http.put<Response>(this.url + '/' + goodPractice.id, goodPractice);
  }

  delete(goodPractice: GoodPractice): Observable<Response> {
    return this.http.delete<Response>(this.url + '/' + goodPractice.id);
  }

}
