import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: "", component: HomeComponent,canActivate:[AuthGuard],
  children: [{
    path: "", component: MovieListComponent
  }]
},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }