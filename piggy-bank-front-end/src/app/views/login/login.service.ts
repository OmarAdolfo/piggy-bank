import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { API } from 'src/app/shared/config/api';
import { Login } from 'src/app/shared/models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url: string;

  constructor(
    private http: HttpClient,
    private httpBackend: HttpBackend
  ) {
    this.http = new HttpClient(this.httpBackend);
    this.url = API.url + 'login';
  }

  login(login: Login): Observable<Response> {
    return this.http.post<Response>(this.url, login);
  }

}
