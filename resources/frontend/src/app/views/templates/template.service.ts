import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Template } from 'src/app/shared/models/template';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  public url: string;
  public urlTemplateActual: string;
  public urlclone: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.url + 'plantillas';
    this.urlTemplateActual = environment.url + 'plantilla-actual';
    this.urlclone = environment.url + 'plantilla-clone';
  }

  getTemplateActual(): Observable<any> {
    return this.http.get<Response>(this.urlTemplateActual);
  }

  clone(template: any): Observable<Response> {
    return this.http.post<Response>(this.urlclone, template);
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
