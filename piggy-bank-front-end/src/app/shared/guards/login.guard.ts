import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { mergeMap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authenticationService.isLogged()) {
            this.authenticationService.logout();
            return true;
        } else {
            this.router.navigate([this.authenticationService.getUrlNavigation()]);
            return of(false);
        }
    }

}
