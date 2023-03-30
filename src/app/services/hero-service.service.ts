import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GridData } from '../interfaces/heroGridInterfaces';
import { ComicDataWrapper } from '../interfaces/comicsInterfaces';

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

  getHeroDetails(id: string): Observable<GridData> {
    const params: HttpParams = new HttpParams({
      fromObject: { apikey: this.publicKey },
    });
    const options = { params };

    return this.http.get<GridData>(this.url + 'characters/' + id, options);
  }

  getComics(id: string): Observable<ComicDataWrapper> {
    const params: HttpParams = new HttpParams({
      fromObject: { characters: id, apikey: this.publicKey },
    });
    const options = { params };

    return this.http.get<ComicDataWrapper>(this.url + 'comics', options);
  }

  sendSearchEvent(name: string) {
    this.nameToSearch.next(name);
  }

  getSearchEvent(): Observable<string> {
    return this.nameToSearch.asObservable();
  }
}
