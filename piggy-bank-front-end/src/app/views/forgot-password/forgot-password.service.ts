import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/shared/config/api';
import { Observable } from 'rxjs/internal/Observable';
import { ResetPassword } from 'src/app/shared/models/resetPassword';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  public getTokenByEmailUrl: string;
  public resetPasswordUrl: string;

  constructor(
    private http: HttpClient,
  ) {
    this.getTokenByEmailUrl = API.url + 'get-token-email?email=';
    this.resetPasswordUrl = API.url + 'reset-password';
  }

  getTokenByEmail(email: string): Observable<Response> {
    return this.http.get<Response>(this.getTokenByEmailUrl + email);
  }

  resetPassword(resetPassword: ResetPassword): Observable<Response> {
    return this.http.post<Response>(this.resetPasswordUrl, resetPassword);
  }

}
