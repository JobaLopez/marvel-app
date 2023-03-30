import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GridData } from '../interfaces/heroGridInterfaces';

@Injectable({
  providedIn: 'root',
})
export class HeroServiceService {
  private nameToSearch = new Subject<any>();
  private url = 'https://gateway.marvel.com/v1/public/';
  private publicKey = '93307aa340a5cc11263bd2a7ff5905cb';

  constructor(private http: HttpClient) {}

  getHeroes(ogParams: HttpParams): Observable<GridData> {
    const paramsWithApikey = ogParams.append('apikey', this.publicKey);
    const options = { params: paramsWithApikey };
    return this.http.get<GridData>(this.url + 'characters', options);
  }

  getHeroDetails(id: number) {
    return this.http.get<GridData>(this.url + 'characters/' + id);
  }

  getComic(id: number) {
    return this.http.get<GridData>(this.url + 'comics/' + id);
  }

  sendSearchEvent(name: string) {
    this.nameToSearch.next(name);
  }

  getSearchEvent(): Observable<any> {
    return this.nameToSearch.asObservable();
  }
}
