import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class GlobalLang {

  public defaultLang;

  constructor(private httpClient: HttpClient) {
    this.defaultLang = this.getJSON2();
  }

  getJSON2(): Observable<any> {
    return this.httpClient.get('./assets/langCZ.json', {responseType: 'json'});
  }

  getJSON() {
    this.httpClient.get<any>('./assets/langCZ.json', {
      observe: 'response',
      responseType: 'json'
    }).subscribe(
        (rest) => {
          this.defaultLang = rest.body.en;
          // console.log(rest.body.en);
        }
        , (rest) => {
          // console.log(rest.error);
        },
        () => console.log('done'));
    // console.log(this.defaultLang);
  }

  loadlang() {
    const defaultLang = this.getJSON();
  }


}
