import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-vote-detail',
  templateUrl: './vote-detail.component.html',
  styleUrls: ['./vote-detail.component.css']
})
export class VoteDetailComponent implements OnInit {
  @Input()
  public event: Event;
  @Input()
  public masterEvent: Event;
  public noteSize: number;
  public submitted: boolean = false;
  public filling: boolean = true;
  public notConfirmed: boolean = true;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  public onSubmit(event) {
    this.submitted = true;
    this.filling = false;
    this.eventService.save(event).subscribe((res) => {
      this.filling = true;
      this.notConfirmed = false;
    },
    error => {
      console.log('Internal server error!');
      this.filling = true;
      this.notConfirmed = false;
    }
    );
  }

  public reset() {
    this.submitted = false;
    this.filling = true;
    this.notConfirmed = true;
  }
}
