import {Component, Injectable, OnInit, Output} from '@angular/core';
import {GlobalLang} from './config/global_lang';
import {NotesService} from './components/notes/notes.service';
import {Language} from './components/notes/notes';
import {LANGDATA} from './config/lang.data';
import {NotesComponent} from './components/notes/notes.component';
import {DetailComponent} from './components/detail/detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GlobalLang, NotesService, NotesComponent, DetailComponent]
})

@Injectable()
export class AppComponent implements OnInit {

  langugage: Language;
  data: any;
  langData = LANGDATA;
  defaultLang = 0;
  @Output() actualLang = this.langData[this.defaultLang];

  constructor(private  noteService: NotesService) {

  }

  changeLang() {
    if (this.defaultLang === 0) {
      this.defaultLang = 1;
    } else {
      this.defaultLang = 0;
    }
    this.actualLang = this.langData[this.defaultLang];
  }

  ngOnInit() {
    this.actualLang = this.langData[this.defaultLang];
    this.data = this.noteService.getLanguage();
    this.data.then((rest) => {
      console.log(rest);
    });
  }

}
