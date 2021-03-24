import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DashboradComponent } from './components/dashborad/dashborad.component';


const routes: Routes = [
   {path:'',redirectTo: '/dashborad',pathMatch: 'full' },
   {path: 'dashborad', component: DashboradComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
