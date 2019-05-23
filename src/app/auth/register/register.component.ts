import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup
  errors: any = []
  

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name:  new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
      password2: new FormControl(null),
    })
  }

  register() {
    const {password, password2, ...rest} = this.form.value

    if(password === password2){
      console.log(password)

    }else {
      this.form.get('password').patchValue(null)
      this.form.get('password2').patchValue(null)
      this.errors.push('Please enter the same password')
      setTimeout(()=>{   
        this.errors = [];
   }, 4000);


    }


   
  }

}
