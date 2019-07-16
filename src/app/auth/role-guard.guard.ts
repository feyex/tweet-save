import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {

  constructor(public auth: UserAuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    if (!localStorage.getItem('access_token')) {
      this.router.navigate(['login']);
      return false;
    }

    const expectedRole = route.data.expectedRole;

    const token = localStorage.getItem('access_token');
    // decode the token to get its payload
    const tokenPayload = decode(token);

    if (localStorage.getItem('access_token') && tokenPayload.role !== expectedRole) {

      this.router.navigate(['login']);

    }

    return true;
  }
}
