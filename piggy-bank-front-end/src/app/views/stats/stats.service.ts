import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/shared/config/api';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = API.url + 'estadisticas';
  }

  getStats(): Observable<Response> {
    return this.http.get<Response>(this.url);
  }
}
