import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import { User } from '../../models/user'

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    email: '',
    password: ''
  }

   form: FormGroup


  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
    })
  }

  login() {
    console.log(this.form.value)
    this.auth.login(this.form.value).subscribe(
      res => {
        this.auth.storeUser(res)
      },
      err => console.log(err)
    )

  }



}
