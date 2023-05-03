import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'fetch-data', component: FetchDataComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
