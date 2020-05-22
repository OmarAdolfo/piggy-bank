import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.url + 'estadisticas';
  }

  getStats(): Observable<Response> {
    return this.http.get<Response>(this.url);
  }
}
