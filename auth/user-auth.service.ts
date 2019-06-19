import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { JwtResponse } from './jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private httpClient: HttpClient) { }
  // set backend server url instance
  apiServer = 'http://localhost:3000';

  // assume the API uses Jwtoken to authenticate user access
  authSubject = new BehaviorSubject(false);

  signup(user: User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.apiServer}/signup`, user).pipe(
      tap((res: JwtResponse) => {

        if (res.user) {
          localStorage.setItem('ACCESS_TOKEN', res.user.access_token);
          // localStorage.setItem('EXPIRES_IN', res.user.expires_in);
          this.authSubject.next(true);
        }
      })
    );

  }

  login(user: User): Observable<JwtResponse> {
    return this.httpClient.post(`${this.apiServer}/login`, user).pipe(
      tap(async (res: JwtResponse) => {

        if (res.user) {
          localStorage.setItem('ACCESS_TOKEN', res.user.access_token);
          // localStorage.setItem('EXPIRES_IN', res.user.expires_in);
          this.authSubject.next(true);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
    this.authSubject.next(false);
  }

  isAuthenticated() {
    return this.authSubject.asObservable();
  }
}
