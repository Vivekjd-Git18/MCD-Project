import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './structure-components/home/home.module';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminModule } from './admin/admin.module';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    
    AppComponent,
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
    AdminModule,
    HttpClientModule, 
    CarouselModule,   
    NgbModule,
    OwlModule,  
    ToastrModule.forRoot(),
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers:
  [HttpClientModule, ProductsService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
22