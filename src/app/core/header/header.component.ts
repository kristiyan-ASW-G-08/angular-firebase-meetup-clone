import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  isMobileNavActive: boolean = false;
  constructor() {}
  ngOnInit() {}
  toggleMobileNav() {
    this.isMobileNavActive = !this.isMobileNavActive;
  }
}
