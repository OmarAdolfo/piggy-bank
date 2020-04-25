import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../config/api';
import { Observable } from 'rxjs/internal/Observable';
import { Role } from '../models/role';
import * as jwt_decode from "jwt-decode";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    public userUrl: string;
    private rol: string;

    constructor(
        private http: HttpClient,
        private jwtHelper: JwtHelperService
    ) {
        this.userUrl = API.url + 'user';
        if (this.isLogged()) {
            this.rol = jwt_decode(this.getToken()).rol;
        }
    }

    getAuthenticatedUser(): Observable<Response> {
        return this.http.get<Response>(this.userUrl);
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
    }

    getToken() {
        return localStorage.getItem('accestoken');
    }

    getRol() {
        return this.rol;
    }

    isLogged() {
        const token = localStorage.getItem('accestoken');
        return !this.jwtHelper.isTokenExpired(token);
    }

    logout() {
        localStorage.removeItem('accestoken');
    }

}
