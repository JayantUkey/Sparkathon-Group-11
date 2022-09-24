import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppointmentComponent } from './user/appointment/appointment.component';
import { HomeComponent } from './user/home/home.component';
import { SlotComponent } from './user/slot/slot.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"app",component:AppointmentComponent},
  {path:"slot",component:SlotComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
