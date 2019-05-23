

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { User} from '../models/User'

@Injectable({
  providedIn: 'root',
}

)
export class AuthService implements CanActivate {


  constructor(private http: HttpClient, public router: Router) { }

  readonly _baseUrl: string = 'http://localhost:3001/api';

  create(formCreate: User) {
    return this.http.post(`${this._baseUrl}/register`, formCreate)
  } 

  login(formLogin: User ) {
    return this.http.post(`${this._baseUrl}/auth`, formLogin)
  }

  isLoggedIn() {
    const { token  } = JSON.parse(localStorage.getItem('data'))
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






