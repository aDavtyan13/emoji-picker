import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {IDataInterface} from '../@core/interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class EmojiPickerService {
  constructor(private http: HttpClient) {
  }

  public getEmojis(): Observable<IDataInterface>{
    return this.http.get<IDataInterface>('./assets/data/emojis.json');
  }
}
