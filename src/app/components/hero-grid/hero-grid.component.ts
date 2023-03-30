import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  heroes: Hero[] = [];

  constructor(private service: HeroServiceService) {
    this.lastEntryLoaded = true;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(searchName?: string) {
    const params: HttpParams = new HttpParams({
      fromObject: { orderBy: 'name', limit: this.limit, offset: this.offset },
    });
    let finalParams = params;
    this.offset += this.limit;

    if (searchName) {
      const newParams = finalParams.append('name', searchName);
      finalParams = newParams;
      this.offset = 0;
      console.log('searchName');
    }

    if (
      this.totalHeroes === undefined ||
      this.heroes.length < this.totalHeroes
    ) {
      this.service.getHeroes(finalParams).subscribe((gridData) => {
        this.heroes.push(...gridData.data.results);
        this.totalHeroes = gridData.data.total;
      });
    } else {
      this.lastEntryLoaded = true;
    }
  }
}
