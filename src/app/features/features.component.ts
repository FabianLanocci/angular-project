import { Component, OnInit } from '@angular/core';
import { Role } from '../core/models/role';
import { User } from '../core/models/user';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  user?: User;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(x => this.user = x);
  }


  ngOnInit(): void {
  }


  get isAdmin() {
    return this.user && this.user.role === Role.Admin;
  }

  logout() {
      this.authenticationService.logout();
  }
}
