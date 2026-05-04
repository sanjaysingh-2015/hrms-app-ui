import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { tap } from 'rxjs/operators';

export const AuthGuard: CanActivateFn = () => {
  const auth = inject(AuthService);

  return auth.isAuthenticated$.pipe(
    tap(isAuth => {
      if (!isAuth) {
        auth.loginWithRedirect({
          appState: { target: '/dashboard' }
        });
      }
    })
  );
};