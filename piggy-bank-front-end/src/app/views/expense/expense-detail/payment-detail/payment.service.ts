import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/shared/config/api';
import { Payment } from 'src/app/shared/models/payment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = API.url + 'pagos';
  }

  find(id: number) {
    return this.http.get<Response>(this.url + '/' + id);
  }

  add(payment: Payment): Observable<Response> {
    return this.http.post<Response>(this.url, payment);
  }

  update(payment: Payment): Observable<Response> {
    return this.http.put<Response>(this.url + '/' + payment.id, payment);
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(this.url + '/' + id);
  }
  
}
