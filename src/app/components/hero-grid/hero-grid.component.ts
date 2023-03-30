import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HeroServiceService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-hero-grid',
  templateUrl: './hero-grid.component.html',
  styleUrls: ['./hero-grid.component.css'],
})
export class HeroGridComponent implements OnInit {
  private limit = 30;
  private offset = 0;

  constructor(private service: HeroServiceService) {}

  ngOnInit(): void {
    this.getHeroes(true);
  }

  getHeroes(firstLoad: boolean, searchName?: string) {
    const params: HttpParams = new HttpParams({
      fromObject: { orderBy: 'name', limit: this.limit, offset: this.offset },
    });

    if (!firstLoad) {
      this.offset += this.limit;
    }
    if (searchName) {
      params.append('name', searchName);
    }

    this.service.getHeroes(params).subscribe((gridData) => {
      console.log(gridData);
    });
  }
}
