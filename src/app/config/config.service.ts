import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ConfigService {
  private _APIurl = 'http://private-9aad-note10.apiary-mock.com/notes';
  public notesData;

  constructor(private httpClient: HttpClient) {
    this.notesData = this.getNote();
    console.log(this.notesData);
  }

  getNote(): Observable<any> {
    return this.httpClient.get(this._APIurl, {responseType: 'json'});
  }

  postNote(body?: string | ''): Observable<any> {
    return this.httpClient.post<any>(this._APIurl,
      {title: body},
      {
        observe: 'response',
        responseType: 'json'
      });
  }

  getNotes(id?: number) {
    this.httpClient.get<any>((this._APIurl + `/${id}`), {observe: 'response'})
      .subscribe((resp) => {
          console.log('Get isSuccess: ' + resp.statusText);
        },
        (resp) => {
          console.log(resp.error);
        });
  }

  deleteNote(id: number) {
    const _DeleteApiUrl = this._APIurl + `/${id}`;

    this.httpClient.delete<any>(
      _DeleteApiUrl,
      {
        headers: {'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'},
        observe: 'response'
      })
      .subscribe((resp) => {
          console.log('Delete success: ' + resp.status + ' ' + resp.statusText);
        },
        (resp) => {
          console.log(resp.error);
        });
  }

  putNote(id: number, body: string) {
    const _updateUrl = this._APIurl + `/${id}`;

    this.httpClient.put<any>(_updateUrl, {title: body}, {observe: 'response'})
      .subscribe((resp) => {
          console.log('Put isSuccess: ' + resp.statusText);
        },
        (resp) => {
          console.log(resp.error);
        });
    this.notesData = this.getNote();
  }
}
