import {Component, EventEmitter, Input} from '@angular/core';
import {ConfigService} from '../../config/config.service';
import {NotesComponent} from '../notes/notes.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ConfigService]
})
export class DetailComponent {

  @Input() actualLang;
  IsTextBoxDisabled = false;
  saveButton = true;

  constructor(private configService: ConfigService) {
  }

  actualNote = {
    id: 1,
    title: 'Jogging in park'
  };


  edit() {
    this.IsTextBoxDisabled = true;
    this.saveButton = false;
  }

  onKey(value: string) {
    this.actualNote.title = value;
  }

  save() {
    this.saveButton = !this.saveButton;
    this.IsTextBoxDisabled = !this.IsTextBoxDisabled;
    this.configService.putNote(this.actualNote.id, this.actualNote.title);
  }

  delete() {
    this.configService.deleteNote(this.actualLang.id);
    this.actualNote.id = null;
    this.actualNote.title = null;
  }
}
