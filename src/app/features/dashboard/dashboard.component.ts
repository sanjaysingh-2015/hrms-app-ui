import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: any;
  stats: any = {};

  constructor(
    public auth: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadUser();
    this.loadStats();
  }

  loadUser() {
    this.auth.user$.subscribe(user => {
      this.user = user;
    });
  }

  loadStats() {
    // Replace with your backend API
    this.stats = {
      employees: 120,
      activeProjects: 8,
      pendingLeaves: 5,
      payrollProcessed: 'April Done'
    };
  }
}