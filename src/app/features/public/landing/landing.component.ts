import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    this.auth.loginWithRedirect({
      appState: { target: '/dashboard' }
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}