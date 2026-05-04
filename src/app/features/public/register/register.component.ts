import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private http = inject(HttpClient);

  loading = false;
  successMessage = '';
  errorMessage = '';

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.registerForm.invalid) return;

    this.loading = true;

    this.http.post('http://localhost:8080/auth-service/api/auth/register', this.registerForm.value)
      .subscribe({
        next: () => {
          this.loading = false;
          this.successMessage = 'Registration successful. Please login.';
          this.registerForm.reset();
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage = err?.error?.message || 'Registration failed';
        }
      });
  }

  goToLogin() {
    this.router.navigate(['/']);
  }
}