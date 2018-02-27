import {Component, Injectable, OnInit, Output} from '@angular/core';
import {LANGDATA} from './config/lang.data';
import {NotesComponent} from './components/notes/notes.component';
import {DetailComponent} from './components/detail/detail.component';
import {SharedService} from './config/noteData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotesComponent, DetailComponent, SharedService],
})

@Injectable()
export class AppComponent implements OnInit {

  data: any;
  langData = LANGDATA;
  defaultLang = 0;
  @Output() actualLang = this.langData[this.defaultLang];

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
  }

}

