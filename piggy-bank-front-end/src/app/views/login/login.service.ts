import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Login } from 'src/app/shared/models/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.url + 'login';
  }

  login(login: Login): Observable<Response> {
    return this.http.post<Response>(this.url, login);
  }

}
