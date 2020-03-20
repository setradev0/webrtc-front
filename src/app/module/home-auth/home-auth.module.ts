import { BoitDialogComponent } from './../../auth-component/boit-dialog/boit-dialog.component';
import { DiscutionIntantaneComponent } from './../../auth-component/home-auth/discution-intantane/discution-intantane.component';
import { NewComponent } from './../../auth-component/home-auth/new/new.component';
import { HomeAuthComponent } from './../../auth-component/home-auth/home-auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAuthRoutingModule } from './home-auth-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    HomeAuthComponent,
    NewComponent,
    DiscutionIntantaneComponent
  ],
  imports: [
    CommonModule,
    HomeAuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [
    HomeAuthComponent,
    NewComponent,
    DiscutionIntantaneComponent
  ],
  entryComponents: [

  ]
})
export class HomeAuthModule { }
