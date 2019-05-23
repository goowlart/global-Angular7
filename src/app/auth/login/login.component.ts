import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from "@angular/router"

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
    })
  }

  login() {
    this.auth.login(this.form.value).subscribe(
      res => {
        this.auth.storeUser(res);
        this.router.navigate(['/home'])
      },
      err => console.log(err)
    )

  }



}
