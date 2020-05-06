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
  public urlTemplateActual: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = API.url + 'plantillas';
    this.urlTemplateActual = API.url + 'plantilla-actual';
  }

  getTemplateActual(): Observable<Response> {
    return this.http.get<Response>(this.urlTemplateActual);
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

  find(id: number): Observable<any> {
    return this.http.get<Response>(this.url + '/' + id);
  }

  update(template: Template): Observable<Response> {
    return this.http.put<Response>(this.url + '/' + template.id, template);
  }
  
}
