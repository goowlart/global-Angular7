import { Router, CanActivate } from '@angular/router';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/* import { tap } from 'rxjs/operators'
import { Observable, BehaviorSubject } from 'rxjs' */


import { User } from '../models/user';


@Injectable({
  providedIn: 'root',
}

)
export class AuthService implements CanActivate {

  formLogin: User

  constructor(private http: HttpClient, public router: Router) { }

  readonly _baseUrl: string = 'http://localhost:3001/api';

  login(formLogin) {
    return this.http.post(`${this._baseUrl}/auth`, formLogin)
  }

  isLoggedIn() {
    const { token } = JSON.parse(localStorage.getItem('data'))
    return !!token
  }

  logout() {
    localStorage.clear()
  }

  canActivate(): boolean {
    if (this.isLoggedIn() == true) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }

  }
  storeUser(res) {
    const { token, user } = res
    const data = {
      'token': token,
      'user': {
        "_id": user._id,
        "name": user.name,
        "email": user.email,
      }
    }
    localStorage.setItem('data', JSON.stringify(data))
    this.isLoggedIn()
  }


}






