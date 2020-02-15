import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isAuth: boolean;
  faBars = faBars;
  isMobileNavActive: boolean = false;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
      console.log(this.isAuth);
    });
  }

  logout() {
    this.authService.logout();
  }
  toggleMobileNav() {
    this.isMobileNavActive = !this.isMobileNavActive;
  }
}
