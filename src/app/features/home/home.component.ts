import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from 'src/app/core/models/user';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = false;
  user: User | null;
  userFromApi?: User;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
) {
    this.user = this.authenticationService.userValue;
}

  ngOnInit(): void {
    this.loading = true;
    if(this.user) {
      this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
        this.loading = false;
        this.userFromApi = user;
    });
    }

}

}
