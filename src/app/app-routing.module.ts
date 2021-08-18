import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './electronic/detail/detail.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { LandingComponent } from './electronic/landing/landing.component';
import { MobileComponent } from './electronic/mobile/mobile.component';
import { FashionComponent } from './fashion/fashion.component';

const routes: Routes = [
  {path:'',redirectTo :'/dashboard' , pathMatch:'full'},
  {path:'dashboard',component : DashboardComponent},
  {path: 'electronics' , component : ElectronicComponent , children :[
    {path : '' , component : LandingComponent},
    {path : 'mobile' , component : MobileComponent},
    // {path : 'mobile/:id' , component : MobileComponent}
]},
  {path: 'fashion' , component : FashionComponent},
  {path:'admin',component : AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
