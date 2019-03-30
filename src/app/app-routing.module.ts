import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { HelloComponent } from './hello/hello/hello.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
  {path: 'hello', loadChildren: './hello/hello.module#HelloModule'},
  //{path: 'hello', component: HelloComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
