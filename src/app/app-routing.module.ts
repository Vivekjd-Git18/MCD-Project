import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../../../../Projects/Routing/src/app/Guards/auth-guard.guard';
import { LoginComponent } from './structure-components/login/login.component';
import { RegistrationComponent } from './structure-components/registration/registration.component';
import { Home2Component } from './structure-components/second-page/home2/home2.component';
import { UserProfileComponent } from './structure-components/user-profile/user-profile.component';
import { HomePageComponent } from '../../../../Projects/Routing/src/app/home-page/home-page.component';
import { Auth1Guard } from './auth/auth1.guard';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminModule } from './admin/admin.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {
    path:'user',component:UserProfileComponent,
    children:[
      {path:'registration',component:RegistrationComponent},
      {path:'login',component:LoginComponent},
    ]
  },
  // {path:'home2',component:Home2Component,canActivate:[Auth1Guard]},
  // {path:'home',component:HomePageComponent},
  {path:'admin',component:AdminPanelComponent},
  // , canActivate:[Auth1Guard]
  {path:'home',loadChildren:()=>import('./structure-components/home/home.module').then((m)=>m.HomeModule)},
  {path:'home2',loadChildren:()=>import('./structure-components/second-page/second-page.module').then((m)=>m.SecondPageModule)},
  {path:'dashboard',loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule)},
  {path:'**',component:NotFoundComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
