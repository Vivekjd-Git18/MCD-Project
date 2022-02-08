import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {path:'cart',component:CartComponent},
      // {path:'cart',component:CartComponent},
      {path:'',redirectTo:'home',pathMatch:'full'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
