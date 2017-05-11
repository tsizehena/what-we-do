import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import { Event} from './event';
import { plainToClass} from 'class-transformer';

@Injectable()
export class EventService {
  private baseUrl: string = 'assets/';

  constructor(private http: Http) { }

  get(id:number): Observable<Event> {
    return this.http.get(`${this.baseUrl}data-get-event.json`)
  .map((res: Response) => res.json())
      .map(json => plainToClass<Event, Object>(Event, json));
  }
}
