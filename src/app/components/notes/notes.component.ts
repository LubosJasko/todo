import {Component, Input, Injectable, OnInit, Output, EventEmitter} from '@angular/core';
import {ConfigService} from '../../config/config.service';
import {NotesService} from './notes.service';
import {AppComponent} from '../../app.component';
import {DetailComponent} from '../detail/detail.component';

@Injectable()
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [ConfigService, DetailComponent]
})

export class NotesComponent implements OnInit {

  @Input() actualLang;
  @Output() actualNote = {
    id: null,
    title: null
  };
  notes;


  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
    this.configService.notesData
      .subscribe((data) => {
        this.notes = data;
      });
  }

  postNotes() {
    this.configService.postNote();
    this.loadData();
  }

  delete(id?: number) {
    if (id === undefined) {
      id = this.notes.length;
      for (let i = 1; i <= id; i++) {
        this.configService.deleteNote(i);
        console.log(i);
      }
    } else {
      this.configService.deleteNote(id);
      console.log(id);
    }
  }

  loadData() {
    this.configService.notesData
      .subscribe((data) => {
        this.notes = data;
      });
  }

  sendNote(id: number, title: string) {
    this.actualNote.id = id;
    this.actualNote.title = title;
    this.ngOnInit();
  }

}
