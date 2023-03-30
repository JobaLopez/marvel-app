import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroServiceService {
  url = 'https://gateway.marvel.com/v1/public/';
  publicKey = '93307aa340a5cc11263bd2a7ff5905cb';

  // https://gateway.marvel.com:443/v1/public/characters?name=ironamn&orderBy=name&limit=30&offset=0&apikey=

  constructor(private http: HttpClient) {}

  getHeroes(ogParams: HttpParams): Observable<ArrayBuffer> {
    const paramsWithApikey = ogParams.append('apikey', this.publicKey);
    console.log(paramsWithApikey);

    const options = { params: paramsWithApikey };
    return this.http.get<ArrayBuffer>(this.url + 'characters', options);
  }
}
