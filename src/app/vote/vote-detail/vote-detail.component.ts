import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-vote-detail',
  templateUrl: './vote-detail.component.html',
  styleUrls: ['./vote-detail.component.css']
})
export class VoteDetailComponent implements OnInit {
  @Input()
  public event: Event;
  public noteSize: number;

  constructor() { }

  ngOnInit() {
  }
}
