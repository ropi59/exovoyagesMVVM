import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:"full"},
  {path: 'home', component: HomeComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
