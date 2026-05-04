import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Menu {
  displayName: string;
  uiPath: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  menus: Menu[] = [];

  ngOnInit() {
    // Temporary static data (later from backend)
    this.menus = [
      { displayName: 'Dashboard', uiPath: '/dashboard' },
      { displayName: 'Users', uiPath: '/users' },
      { displayName: 'Payroll', uiPath: '/payroll' }
    ];
  }
}