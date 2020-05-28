import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavingService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.url + 'ahorros';
  }

  getSavings(): Observable<any> {
    return this.http.get<Response>(this.url + '/cuenta-ahorro');
  }

  getAnnualReminders(): Observable<any> {
    return this.http.get<Response>(this.url + '/recordatorios-anuales');
  }
  
}
