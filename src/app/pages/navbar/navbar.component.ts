import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  loginState = false;

  constructor(private router: Router, private authService: AuthService) { 
    authService.authStatus.subscribe(res =>
    this.loginState = res);

    this.router.events
    .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
    .subscribe(event => {
      if (
        event.id === 1 &&
        event.url === event.urlAfterRedirects 
      ) {
       this.loginState = authService.authenticated();
      }
    })
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('sign-in');
  }
}
