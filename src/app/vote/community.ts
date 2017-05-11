import {Note} from '../choice/note';
import {Type} from 'class-transformer';

export class Community {
  id: number;
  title: string;
  description: string;
  @Type(() => Note) notes: Note[];
}
