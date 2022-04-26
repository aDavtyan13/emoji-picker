import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {
  }

  public getEmojis(): Observable<any>{
    return this.http.get<any>('./assets/data/data.json');
  }
}
