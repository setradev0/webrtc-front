import { DiscutionIntantaneComponent } from './../../auth-component/home-auth/discution-intantane/discution-intantane.component';
import { NewComponent } from './../../auth-component/home-auth/new/new.component';
import { HomeAuthComponent } from './../../auth-component/home-auth/home-auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAuthRoutingModule } from './home-auth-routing.module';


@NgModule({
  declarations: [
    HomeAuthComponent,
    NewComponent,
    DiscutionIntantaneComponent
  ],
  imports: [
    CommonModule,
    HomeAuthRoutingModule,
  ],
  exports: [
    HomeAuthComponent,
    NewComponent,
    DiscutionIntantaneComponent
  ]
})
export class HomeAuthModule { }
