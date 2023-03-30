import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hero } from 'src/app/interfaces/heroGridInterfaces';
import { HeroServiceService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-hero-grid',
  templateUrl: './hero-grid.component.html',
  styleUrls: ['./hero-grid.component.css'],
})
export class HeroGridComponent implements OnInit {
  private limit = 30;
  private offset = 0;
  private totalHeroes: number | undefined = undefined;
  public lastEntryLoaded: boolean;
  public nameToSearch: string = '';
  private clickEventsubscription: Subscription;
  public heroes: Hero[] = [];
  public noResults: boolean = false;

  constructor(private service: HeroServiceService) {
    this.lastEntryLoaded = false;
    this.clickEventsubscription = this.service
      .getSearchEvent()
      .subscribe((searchName) => {
        this.getHeroes(true, searchName);
      });
  }

  ngOnInit(): void {
    this.getHeroes(true);
  }

  getHeroes(firstLoad: boolean, searchName?: string) {
    let params: HttpParams = new HttpParams();
    this.nameToSearch = searchName ? searchName : '';

    if (firstLoad) {
      this.offset = 0;
      this.heroes = [];
      this.lastEntryLoaded = false;
    } else {
      this.offset = this.offset += this.limit;
    }

    params = this.createParams(this.nameToSearch);
    console.log('offset', this.offset);

    if (
      this.heroes.length == 0 ||
      this.totalHeroes === undefined ||
      this.heroes.length < this.totalHeroes
    ) {
      this.service.getHeroes(params).subscribe((gridData) => {
        if (gridData.data.results.length > 0) {
          this.noResults = false;
          this.heroes.push(...gridData.data.results);
        } else {
          this.noResults = true;
        }
        this.totalHeroes = gridData.data.total;
      });
    } else {
      this.lastEntryLoaded = true;
    }
  }

  createParams(searchName?: string): HttpParams {
    const params: HttpParams = new HttpParams({
      fromObject: { orderBy: 'name', limit: this.limit, offset: this.offset },
    });

    if (searchName) {
      const newParams = params.append('nameStartsWith', searchName);
      return newParams;
    }

    return params;
  }
}
