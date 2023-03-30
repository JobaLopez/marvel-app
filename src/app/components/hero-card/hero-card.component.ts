import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/heroGridInterfaces';

@Component({
  selector: 'hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: Hero;
  heroImg = this.hero.thumbnail.path + '.' + this.hero.thumbnail.extension;
  heroName = this.hero.name;
  constructor() {}

  ngOnInit(): void {
    console.log(this.hero);
  }
}
