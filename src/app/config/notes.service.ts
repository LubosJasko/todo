import {Injectable} from '@angular/core';

@Injectable()
export class SharedService {
  dataObject: string[] = [];

  insertData(data: string) {
    this.dataObject.unshift(data);
  }
}
