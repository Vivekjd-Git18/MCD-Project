import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondPageRoutingModule } from './second-page-routing.module';
import { Navbar2Component } from '../../shared/components/navbar2/navbar2.component';
import { Home2Component } from './home2/home2.component';
import { AccountComponent } from './account/account.component';
import { Footer2Component } from './footer2/footer2.component';


@NgModule({
  declarations: [
    AccountComponent,
    Home2Component,
    Navbar2Component,
    Footer2Component
  ],
  
  imports: [
    CommonModule,
    SecondPageRoutingModule,
  ]
})
export class SecondPageModule { }
