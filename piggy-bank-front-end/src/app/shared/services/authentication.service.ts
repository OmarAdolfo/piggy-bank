import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Role } from '../models/role';
import * as jwt_decode from "jwt-decode";
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    public userUrl: string;
    public changePasswordUrl: string;
    private rol: string;
    private sub: string;

    constructor(
        private http: HttpClient,
        private jwtHelper: JwtHelperService
    ) {
        this.userUrl = environment.url + 'user';
        this.changePasswordUrl = environment.url + 'change-password';
        if (this.isLogged()) {
            this.rol = jwt_decode(this.getToken()).rol;
            this.sub = jwt_decode(this.getToken()).sub;
        }
    }

    getAuthenticatedUser(): Observable<Response> {
        return this.http.get<Response>(this.userUrl);
    }

    changePassword(password: any): Observable<string> {
        return this.http.post<string>(this.changePasswordUrl, password);
    }

    getUrlNavigation() {
        let url: string;
        if (Role.User.toString() === this.rol) {
            url = 'home/dashboard';
        } else {
            url = 'home/users';
        }
        return url;
    }

    saveToken(token: string) {
        localStorage.setItem('accestoken', token);
        this.rol = jwt_decode(this.getToken()).rol;
        this.sub = jwt_decode(this.getToken()).sub;
    }

    getToken() {
        return localStorage.getItem('accestoken');
    }

    getRol() {
        return this.rol;
    }

    getSub() {
        return this.sub;
    }

    isLogged() {
        const token = localStorage.getItem('accestoken');
        return !this.jwtHelper.isTokenExpired(token);
    }

    logout() {
        localStorage.removeItem('accestoken');
    }

}
