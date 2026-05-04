import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {

  private auth = inject(AuthService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  message: string | null = null;
  error: string | null = null;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['error']) {
        this.error = params['error_description'];
      }

      if (params['registered'] === 'success') {
        this.message = 'Registration successful. Please login.';
      }
    });

    // Handle Auth0 redirect
    this.auth.appState$.subscribe(state => {
      if (state?.target) {
        this.router.navigateByUrl(state.target);
      }
    });
  }

  login() {
    this.auth.loginWithRedirect({
      appState: { target: '/dashboard' }
    });
  }

  signup() {
    this.router.navigate(['/register']);
  }
}