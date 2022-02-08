import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { Footer1Component } from './components/footer1/footer1.component';

@NgModule({
  declarations: [
    // NavbarComponent,
    // Footer1Component,
  
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    // NavbarComponent,
    // Footer1Component,
  ]
})
export class SharedModule { }
