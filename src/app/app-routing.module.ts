import { AuthGuard } from './shared/guard/auth.guard';
import { LoginGuard } from './shared/guard/login.guard';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'inscription', component: InscriptionComponent, canActivate: [LoginGuard]},
  {
    path: 'home-auth', 
    loadChildren: () => import('./module/home-auth/home-auth.module').then(mod => mod.HomeAuthModule),
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
