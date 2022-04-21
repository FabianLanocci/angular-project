import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  private role?: string | null;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const user = this.authenticationService.userValue;
      this.role = <string>localStorage.getItem('roleName');

      if(user)
      if (Object.keys(user).length > 0 && (this.role != "" && this.role != undefined)) {
          if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
              // role not authorised so redirect to home page
              this.router.navigate(['/features/home']);
              return false;
          }
          // authorised so return true
          return true;
      }

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/auth']);
      return false;
  }
}
