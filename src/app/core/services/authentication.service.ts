import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, EMPTY, Observable, ReplaySubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private storedUser:string | null = localStorage.getItem('user');
    private userSubject : BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
    public user!: Observable<User | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
      if(this.storedUser != null) {
        this.userSubject = new BehaviorSubject<User | null>(JSON.parse(this.storedUser));
        this.user = this.userSubject.asObservable();
      }
    }

    public get userValue(): User | null {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map((user:User) => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('roleName', user.role);
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        let emptyUser: User = new User();
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(emptyUser);
        this.router.navigate(['/login']);
    }
}
