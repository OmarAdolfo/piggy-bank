import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Revenue } from 'src/app/shared/models/revenue';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/shared/config/api';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = API.url + 'ingresos';
  }

  find(id: number) {
    return this.http.get<Response>(this.url + '/' + id);
  }

  add(revenue: Revenue): Observable<Response> {
    return this.http.post<Response>(this.url, revenue);
  }

  update(revenue: Revenue): Observable<Response> {
    return this.http.put<Response>(this.url + '/' + revenue.id, revenue);
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(this.url + '/' + id);
  }
  
}
