import {Community} from './community';
import {Choice} from '../choice/choice';
import {Note} from '../choice/note';
import {Type} from 'class-transformer';

export class Event {
  id: number;
  title: string;
  description: string;
  campaign_begin: Date;
  campaign_end: Date;
  @Type(() => Choice) choices: Choice[];
  community: Community;
  penta: string;
  comment: string;

  public setTitle(title) {
    this.title = title;
  }

  public setDescription(description) {
    this.description = description;
  }

  public getNoteTitles() {
    let titles = [];
    let noteSize = this.community[0].notes.length;
    for(var i = 0; i < noteSize; i++) {
      titles.push(this.community[0].notes[i].label);
    };

    return titles;
  }
}
