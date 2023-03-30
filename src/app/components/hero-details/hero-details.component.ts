import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comic } from 'src/app/interfaces/comicsInterfaces';
import { HeroServiceService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
})
export class HeroDetailsComponent implements OnInit {
  id: string = '';
  name: string = '';
  description: string = '';
  img: string = '';
  comics: Comic[] = [];

  constructor(
    private service: HeroServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.service.getHeroDetails(this.id).subscribe((data) => {
      this.name = data.data.results[0].name;
      this.description = data.data.results[0].description;
      this.img =
        data.data.results[0].thumbnail.path +
        '.' +
        data.data.results[0].thumbnail.extension;
    });
    this.service.getComics(this.id).subscribe((data) => {
      if (data.data.results.length !== 0) {
        for (let i = 0; i < 4; i++) {
          if (i > data.data.results.length) {
            break;
          }
          const comic = data.data.results[i];
          this.comics.push(comic);
        }
      }
    });
  }
}
