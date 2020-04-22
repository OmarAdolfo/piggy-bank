import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../config/api';
import { Observable } from 'rxjs/internal/Observable';
import { Role } from '../models/role';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    public userUrl: string;
    public validateTokenUrl: string;

    constructor(
        private http: HttpClient,
        private router: Router,
    ) {
        this.userUrl = API.url + 'user';
        this.validateTokenUrl = API.url + 'validate-token';
    }

    getAuthenticatedUser(): Observable<Response> {
        return this.http.get<Response>(this.userUrl);
    }

    validateToken(): Observable<Response> {
        return this.http.get<Response>(this.validateTokenUrl);
    }

    getUrlNavigation() {
        let url: string;
        if (Role.User.toString() === this.getUser().rol) {
            url = 'home/dashboard';
        } else {
            url = 'home/users';
        }
        return url;
    }

    saveToken(token: string) {
        localStorage.setItem('accestoken', token);
    }

    saveUser(user: any) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    getToken() {
        return localStorage.getItem('accestoken');
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user')).user;
    }

    isLogged() {
        return localStorage.getItem('accestoken') !== null && localStorage.getItem('user') !== null;
    }

    logout() {
        localStorage.removeItem('accestoken');
        localStorage.removeItem('user');
    }

}
