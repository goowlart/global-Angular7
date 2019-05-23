
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup
  errors: any = []


  constructor( private auth: AuthService,  private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
      password2: new FormControl(null),
    })
  }

  register() {
    const { password, password2, ...rest } = this.form.value

    if (password === password2) {
      const {name, email} = rest
      const data  = {
          name,
          email,
          password
      }
  
      this.auth.create(data).subscribe(
        res => {
          this.auth.storeUser(res);
          this.router.navigate(['/home'])
        },
        err => console.log(err)
      )


    } else {
      this.form.get('password').patchValue(null)
      this.form.get('password2').patchValue(null)
      this.errors.push('Please enter the same password')
      setTimeout(() => {
        this.errors = [];
      }, 4000);

    }

  }

}
