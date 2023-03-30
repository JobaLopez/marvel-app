import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/heroGridInterfaces';

@Component({
  selector: 'hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: Hero;
  heroImg!: string;
  heroName!: string;
  id!: number;

  constructor() {}

  ngOnInit(): void {
    this.heroImg =
      this.hero.thumbnail.path + '.' + this.hero.thumbnail.extension;
    this.heroName = this.hero.name;
    this.id = this.hero.id;
  }
}
