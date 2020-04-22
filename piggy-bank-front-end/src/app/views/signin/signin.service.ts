import { Injectable } from '@angular/core';
import { API } from 'src/app/shared/config/api';
import { SignIn } from 'src/app/shared/models/signin';
import { Observable } from 'rxjs';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  public url: string;

  constructor(
    private http: HttpClient,
    private httpBackend: HttpBackend
  ) {
    this.url = API.url + 'register';
    this.http = new HttpClient(this.httpBackend);
  }

  signIn(signIn: SignIn): Observable<Response> {
    return this.http.post<Response>(this.url, signIn);
  }
}
