import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('sign-in');
  }
}
