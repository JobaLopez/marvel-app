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
  heroes!: Hero[];

  constructor(private service: HeroServiceService) {}

  ngOnInit(): void {
    this.getHeroes(true);
  }

  getHeroes(firstLoad: boolean, searchName?: string) {
    const params: HttpParams = new HttpParams({
      fromObject: { orderBy: 'name', limit: this.limit, offset: this.offset },
    });
    let finalParams = params;

    if (!firstLoad) {
      this.offset += this.limit;
    }

    if (searchName) {
      const newParams = finalParams.append('name', searchName);
      finalParams = newParams;
    }

    this.service.getHeroes(finalParams).subscribe((gridData) => {
      this.heroes = gridData.data.results;
    });
  }
}
