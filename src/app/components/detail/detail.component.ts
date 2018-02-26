import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {ConfigService} from '../../config/config.service';
import {SharedService} from "../../config/noteData.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ConfigService]
})
export class DetailComponent implements DoCheck, OnInit {

  @Input() actualLang;
  IsTextBoxDisabled = false;
  saveButton = true;
  editButton = true;
  newButton = true;
  deleteButton = true;
  actualNote;

  constructor(private configService: ConfigService,
              private noteService: SharedService) {
  }

  ngOnInit() {
    this.actualNote = this.noteService.noteData;
    if (this.actualNote.id != null && this.IsTextBoxDisabled == false) {
      this.editButtons(true, false, true, false)
    }
  }

  ngDoCheck() {
    if (this.actualNote.new === true) {
      this.IsTextBoxDisabled = true;
      this.editButtons(false, false, true, true)
    }

    if (this.noteService.noteData.id === null) {
      this.editButtons(true, true, true, true)
    } else {
      this.ngOnInit();
    }
  }

  newPost() {
    this.editButtons(true, true, true, false);
    this.configService.postNote(this.actualNote.title);
    this.IsTextBoxDisabled = false;
    this.noteService.insertNote(this.actualNote.id, this.actualNote.title, false);
  }

  edit() {
    if (this.noteService.noteData.id === null) {
      return
    }

    this.IsTextBoxDisabled = true;
    this.editButtons(true, true, false, false)
  }

  onKey(value: string) {
    this.actualNote.title = value;
  }

  save() {
    this.editButtons(false, true, false, true)
    this.IsTextBoxDisabled = false;
    this.configService.putNote(this.actualNote.id, this.actualNote.title);
  }

  delete() {
    this.configService.deleteNote(this.actualLang.id);
    this.noteService.insertNote(null, null);
    this.editButtons(false, false, false, false);
    this.IsTextBoxDisabled = false;
  }

  editButtons(newButton?: boolean, editButton?: boolean, saveButton?: boolean, deleteButton?: boolean) {
    this.newButton = newButton;
    this.editButton = editButton;
    this.saveButton = saveButton;
    this.deleteButton = deleteButton;
  }
}
