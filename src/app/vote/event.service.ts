import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { Event} from './event';
import { plainToClass} from 'class-transformer';
import {Headers} from '@angular/http';

@Injectable()
export class EventService {
  private baseUrl: string = 'assets';

  constructor(private http: Http) { }

  get(id:number): Observable<Event> {
    return this.http.get(`${this.baseUrl}/data-get-event.json`)
      .map(this.toJson).map(json => plainToClass<Event, Object>(Event, json));
  }

  save(event: Event): Observable<Response> {
  //save(event: Event) {
    /*return this.http
      .post(`${this.baseUrl}/vote-save/${event.id}`, JSON.stringify(event), {headers: this.getHeaders()});
    */
    return this.http
      .post(`${this.baseUrl}/vote-save/${event.id}`, JSON.stringify(event), {headers: this.getHeaders()});
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return headers;
  }

  public toJson(res: Response) {
    return res.json();
  }

}
