import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  _isAuthenticated(): Boolean {
    return !!localStorage.getItem('token');
  }
}
