import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth-guard';

export const routes: Routes = [

  // PUBLIC
  {
    path: '',
    loadComponent: () =>
      import('./features/public/landing/landing.component')
        .then(m => m.LandingComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/public/register/register.component')
        .then(m => m.RegisterComponent)
  },

  // PROTECTED
  {
    path: '',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./layout/layout.component')
        .then(m => m.LayoutComponent),

    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }
];