import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable()
export class HeaderComponent implements OnInit {
  @Input() langData;
  @Input() defaultLang;
  @Output() changeLangData = new EventEmitter();
  title;
  flagLogo;
  welcome;
  flag = this.appComponent.langData[this.appComponent.defaultLang].id;

  constructor(private appComponent: AppComponent) {
  }

  ngOnInit() {
    this.title = this.appComponent.langData[this.appComponent.defaultLang].Lang_Name;
    this.flag = this.appComponent.langData[this.appComponent.defaultLang].id;
    this.flagLogo = './assets/img/' + (this.title) + '.png';
    this.welcome = this.appComponent.langData[this.appComponent.defaultLang].headerTitle;
  }

  switchLang() {
    this.changeLangData.emit();
    this.ngOnInit();
  }
}


