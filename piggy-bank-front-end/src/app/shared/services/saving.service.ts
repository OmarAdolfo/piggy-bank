import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class SavingService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = API.url + 'ahorros';
  }

  getSavings() {
    return this.http.get<Response>(this.url + '/cuenta-ahorro');
  }

  getAnnualReminders() {
    return this.http.get<Response>(this.url + '/recordatorios-anuales');
  }
  
}
