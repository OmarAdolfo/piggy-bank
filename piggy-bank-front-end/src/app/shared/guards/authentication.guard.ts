import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router,
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivateRouteByUser(state);
    }

    canActivateRouteByUser(state: RouterStateSnapshot) {
        if (!this.authenticationService.isLogged()) {
            this.router.navigate(['login']);
            return of(false);
        } else {
            return this.authenticationService.validateToken().pipe(
                mergeMap(() => {
                    if (state.url === '/home') {
                        this.router.navigate([this.authenticationService.getUrlNavigation()]);
                    }
                    return of(true);
                }),
                catchError(() => {
                    this.authenticationService.logout();
                    return of(false);
                })
            )
        }
    }

    canActivateRouteByAdmin(state: RouterStateSnapshot) {
        if (!this.authenticationService.isLogged()) {
            this.router.navigate(['login']);
            return of(false);
        } else {
            return this.authenticationService.validateToken().pipe(
                mergeMap(() => {
                    if (state.url === '/home') {
                        this.router.navigate([this.authenticationService.getUrlNavigation()]);
                    }
                    return of(true);
                }),
                catchError(() => {
                    this.authenticationService.logout();
                    return of(false);
                })
            )
        }
    }
}
