import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login.component';
import { GenresComponent } from './genres/genres.component';
import { ShowsComponent } from './genres/shows.component';
import { AddShowComponent } from './genres/add-show/add-show.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'fetch-data', component: FetchDataComponent},
  {path: 'genres', component: GenresComponent},
  {path: 'login', component: LoginComponent},
  {path: 'shows/:id', component: ShowsComponent},
  {path: 'add-show', component: AddShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
