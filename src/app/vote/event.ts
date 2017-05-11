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

  public setTitle(title) {
    this.title = title;
  }

  public setDescription(description) {
    this.description = description;
  }
}
