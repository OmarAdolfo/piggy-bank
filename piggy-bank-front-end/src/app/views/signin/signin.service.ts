import { Injectable } from '@angular/core';
import { SignIn } from 'src/app/shared/models/signin';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  public url: string;

  constructor(
    private http: HttpClient,
  ) {
    this.url = environment.url + 'register';
  }

  signIn(signIn: SignIn): Observable<Response> {
    return this.http.post<Response>(this.url, signIn);
  }
}
