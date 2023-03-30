import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GridData } from '../interfaces/heroGridInterfaces';

@Injectable({
  providedIn: 'root',
})
export class HeroServiceService {
  url = 'https://gateway.marvel.com/v1/public/';
  publicKey = '93307aa340a5cc11263bd2a7ff5905cb';

  constructor(private http: HttpClient) {}

  getHeroes(ogParams: HttpParams): Observable<GridData> {
    const paramsWithApikey = ogParams.append('apikey', this.publicKey);
    const options = { params: paramsWithApikey };
    return this.http.get<GridData>(this.url + 'characters', options);
  }

  getHeroDetails() {}
}
