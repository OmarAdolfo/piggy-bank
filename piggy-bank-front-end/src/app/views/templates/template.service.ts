import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/shared/config/api';
import { Template } from 'src/app/shared/models/template';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = API.url + 'plantillas';
  }

  get(): Observable<Template[]> {
    return this.http.get<Template[]>(this.url);
  }

  add(template: Template): Observable<Response> {
    return this.http.post<Response>(this.url, template);
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(this.url + '/' + id);
  }
  
}
