import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home2Component } from './home2/home2.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from '../cart/cart.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { OffersComponent } from './offers/offers.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path:'',component:Home2Component,
    children:[
      {path:'account',component:AccountComponent},
      {path:'orders',component:OrdersComponent},
      {path:'help',component:HelpCenterComponent},
      {path:'offers',component:OffersComponent},
      {path:'cart',component:CartComponent},
      {path:'',redirectTo:'/home2',pathMatch:'full'}
    ]},
];


// [
//   {
//     path:'',
//     component:HomeComponent,
//     children:[
//       {path:'cart',component:CartComponent}
//     ]
//   },
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondPageRoutingModule { }
