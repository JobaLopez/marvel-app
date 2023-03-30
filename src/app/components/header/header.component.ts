import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  backButton = false;
  searchBar = false;

  constructor(private router: Router) {
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

  search() {
    console.log('search');
  }
}
