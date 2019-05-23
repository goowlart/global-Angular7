
import {AuthService} from './services/auth.service';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


const routes: Routes = [
 {path: '', component: LoginComponent},
 {path: 'register', component: RegisterComponent},
 {path: 'home', 
 component: HomeComponent,
 canActivate: [AuthService]
 },
 { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
