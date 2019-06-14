

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs'

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';




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

  login(formLogin: User ): Observable < any >  {
    return this.http.post(`${this._baseUrl}/auth`, formLogin)
    .catch(this.errorHandler)
   
  }


  errorHandler(error: HttpErrorResponse) {
     return Observable.throw(error.error.error || 'Server Error')
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






