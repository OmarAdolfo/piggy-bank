import { Injectable, ɵConsole } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authenticationService.isLogged()) {
            this.authenticationService.logout();
            this.router.navigate(['login']);
            return false;
        } else {
            if (state.url === '/home') {
                this.router.navigate([this.authenticationService.getUrlNavigation()]);
            }
            if (!this.authenticationService.isLogged() || (route.data.rol && this.authenticationService.getRol() !== route.data.rol)) {
                this.router.navigate(['login']);
                return false;
            }
        }
        return true;
    }

}
