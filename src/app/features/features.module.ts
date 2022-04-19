import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';


@NgModule({
  declarations: [
    FeaturesComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
