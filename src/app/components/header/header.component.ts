import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HeroServiceService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  backButton = false;
  searchBar = false;
  nameToSearch = '';

  constructor(private router: Router, private service: HeroServiceService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (router.url === '/') {
          this.searchBar = true;
          this.backButton = false;
        } else {
          this.searchBar = false;
          this.backButton = true;
        }
      }
    });
  }

  ngOnInit(): void {}

  search(searchName: string) {
    this.service.sendSearchEvent(searchName);
  }
}
