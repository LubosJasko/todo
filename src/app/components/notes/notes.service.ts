import {Injectable, OnInit} from '@angular/core';
import {Notes} from './notes';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class NotesService implements OnInit {


  private DataUrl = './assets/langCZ.json';


  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get('./assets/langCZ.json');
  }

  // getLanguage(): Observable<Object> {
  //   return this.http.get<any>('./assets/langCZ.json', {observe: 'response'});
  // }

  // getLanguage() {
  //   return this.http.get('./assets/langCZ.json', {observe: 'response'});
  // }

  getLanguage(): Observable<Notes[]> {
    return this.http.get<Notes[]>(this.DataUrl)
      .pipe(
        tap(notes => console.log(`fetched heroes`)));
  }


  ngOnInit() {
    this.getLanguage();
  }

}
