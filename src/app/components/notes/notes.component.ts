import {Component, Input, Injectable, OnInit, Output} from '@angular/core';
import {ConfigService} from '../../config/config.service';
import {DetailComponent} from '../detail/detail.component';
import {SharedService} from "../../config/noteData.service";

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

  constructor(private configService: ConfigService,
              private noteService: SharedService) {
  }

  ngOnInit() {
    this.configService.notesData
      .subscribe((data) => {
        this.notes = data;
      });
  }

  postNotes() {
    this.noteService.insertNote((this.notes.length + 1), null, true)
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
    this.noteService.insertNote(id, title);
    this.ngOnInit();
  }

}
