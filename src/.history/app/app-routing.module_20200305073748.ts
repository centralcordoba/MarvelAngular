import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActoresComponent } from './actores/actores.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/actores', pathMatch:'full'
  },
  {
    path:'actores', component: ActoresComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
