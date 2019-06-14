
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  readonly _baseUrl: string = 'http://localhost:3001/api';


   token:  string = JSON.parse(localStorage.getItem('data')).token
  
   headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.token
  })

   
  getProjects(){

    return this.http.get(`${this._baseUrl}/projects`, { headers: this.headers })
  }
  addProject(params){
    const body = JSON.stringify(params)
    return this.http.post(`${this._baseUrl}/projects` , body,  { headers: this.headers})
  }

}
