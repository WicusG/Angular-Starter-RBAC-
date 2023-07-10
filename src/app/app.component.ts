import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 

import { AuthenticationService } from './app-services/authentication.service';
import { User } from './app-models/user';
import { Role } from './app-models/role.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user?: User;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.user.subscribe(x => this.user = x);
  }

  ngOnInit() {}

  get isAdmin() {
    return this.user && this.user.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
    this.user = undefined;
    this.router.navigate(['login']);
  }
}
