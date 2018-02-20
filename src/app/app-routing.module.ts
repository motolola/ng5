import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; //Link to home ... no need ts
import { AboutComponent } from './about/about.component'; //Link to home ... no need ts

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about/:id',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
