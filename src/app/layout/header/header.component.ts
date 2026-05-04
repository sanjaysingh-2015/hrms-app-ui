import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public auth: AuthService) {}

  logout() {
    const returnTo = environment.auth0.redirectUri;

    this.auth.logout({
      logoutParams: { returnTo }
    });
  }
}