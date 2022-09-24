import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { components } from 'knockout';
import { AppointmentComponent } from './user/appointment/appointment.component';
import { HomeComponent } from './user/home/home.component';

const routes: Routes = [
  { path: "", component:HomeComponent },
  {path:"/appointment",component:AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
