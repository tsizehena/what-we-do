import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';
import {ActivatedRoute, Params} from '@angular/router';
import { Choice } from '../../choice/choice';
import { Note } from '../../choice/note';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vote-page',
  templateUrl: './vote-page.component.html',
  styleUrls: ['./vote-page.component.css']
})
export class VotePageComponent implements OnInit {
  public event: Event;

  @Input()
  public title: string;
  @Input()
  public  description: string;

  constructor(private eventService: EventService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        //let eventId: number = params['id'];
        let event: Observable<Event> = this.eventService.get(1);
        return Observable.zip(event);
      })
      .subscribe((o: [Event]) => {
        this.event = o[0];
        this.title = this.event.title;
        this.description = this.event.description;
      })
  }
}
