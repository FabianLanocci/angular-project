import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../core/models/role';
import { User } from '../core/models/user';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  user?: User | null;

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) {
  }


  ngOnInit(): void {
    this.authenticationService.user.subscribe(x => {
      this.user = x
    }, error => {
      console.log(error);
    });
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/features/home';
    this.router.navigateByUrl(returnUrl);
  }


  get isAdmin() {
    return this.user && this.user.role === Role.Admin;
  }

  logout() {
      this.authenticationService.logout();
  }
}
