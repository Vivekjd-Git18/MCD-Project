import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridCardsComponent } from './structure-components/grid-cards/grid-cards.component';
import { SearchMenubarComponent } from './structure-components/search-menubar/search-menubar.component';
import { List1Component } from './structure-components/list1/list1.component';
import { ProductListComponent } from './structure-components/product-list/product-list.component';
import { CartBlockComponent } from './structure-components/cart-block/cart-block.component';
import { SidebarComponent } from './structure-components/sidebar/sidebar.component';
// import { Footer1Component } from './structure-components/footer1/footer1.component';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Navbar2Component } from './shared/components/navbar2/navbar2.component';
import { Footer2Component } from './structure-components/second-page/footer2/footer2.component';
import { Home2Component } from './structure-components/second-page/home2/home2.component';
import { AccountComponent } from './structure-components/second-page/account/account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
// import { HomeComponent } from './structure-components/home/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeModule } from './structure-components/home/home.module';
import { HomeComponent } from './structure-components/home/home/home.component';
import { CartComponent } from './structure-components/cart/cart.component';
// import { AdminNavComponent } from './admin-nav/admin-nav.component';



// 1. Install BootStrap
// npm install bootstrap --save
// 2. Install ngBootstrap
// npm install --save @ng-bootstrap/ng-bootstrap


@NgModule({
  declarations: [
    
    AppComponent,
    // NavbarComponent,
    // GridCardsComponent,
    // SearchMenubarComponent,
    // List1Component,
    // ProductListComponent,
    // CartBlockComponent,
    // SidebarComponent,
    // Footer1Component,
    // Navbar2Component,
    // Footer2Component,
    // Home2Component,
    // AccountComponent,
    AdminPanelComponent,
    // AdminNavComponent,
    // CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    HttpClientModule, 
    CarouselModule,   
    NgbModule,
    OwlModule,  
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers:
  [HttpClientModule, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
