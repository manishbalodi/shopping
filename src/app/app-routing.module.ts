import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { LandingComponent } from './electronic/landing/landing.component';
import { MobileComponent } from './electronic/mobile/mobile.component';
import { FashionComponent } from './fashion/fashion.component';

const routes: Routes = [
  {path:'',redirectTo :'/dashboard' , pathMatch:'full'},
  {path:'dashboard',component : DashboardComponent},
  {path: 'electronics' , component : ElectronicComponent , children :[
    {path : '' , component : LandingComponent},
    {path : 'mobile' , component : MobileComponent}
]},
  {path: 'fashion' , component : FashionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
