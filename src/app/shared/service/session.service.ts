import { User } from './../model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setSessionUser(user: User) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  setSessionToken(token) {
    sessionStorage.setItem('token', token);
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  cleanSession() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.clear();
  }
}
