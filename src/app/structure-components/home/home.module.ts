import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Footer1Component } from '../../shared/components/footer1/footer1.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridCardsComponent } from '../grid-cards/grid-cards.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';
import { SearchMenubarComponent } from '../search-menubar/search-menubar.component';
import { List1Component } from '../list1/list1.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { CartBlockComponent } from '../cart-block/cart-block.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    Footer1Component,
    NavbarComponent,
    GridCardsComponent,
    SearchMenubarComponent,
    List1Component,
    ProductListComponent,
    CartBlockComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    OwlModule,
    Ng2SearchPipeModule,

  ]
})
export class HomeModule { }
