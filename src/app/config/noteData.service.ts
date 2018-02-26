import {Injectable} from '@angular/core';

@Injectable()
export class SharedService {
  dataObject: string[] = [];

  noteData = {
    id: null,
    title: null,
    new: null
  };

  insertNote(id: number, title: string, newTodo?: boolean) {
    this.noteData.id = id;
    this.noteData.title = title;
    this.noteData.new = newTodo;
  }

}
