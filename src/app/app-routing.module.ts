import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplianceComponent } from './electronic/appliance/appliance.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { LandingComponent as ElectronicLanding} from './electronic/landing/landing.component';
import { LandingComponent as FashionLanding} from './fashion/landing/landing.component';
import { LaptopComponent } from './electronic/laptop/laptop.component';
import { MobileComponent } from './electronic/mobile/mobile.component';
import { FashionComponent } from './fashion/fashion.component';
import { KidsComponent } from './fashion/kids/kids.component';
import { WomenComponent } from './fashion/women/women.component';
import { MenComponent } from './fashion/men/men.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',redirectTo :'/dashboard' , pathMatch:'full'},
  {path:'dashboard',component : DashboardComponent},
  {path: 'electronics' , component : ElectronicComponent , children :[
    {path : '' , component : ElectronicLanding},
    {path : 'mobile' , component : MobileComponent},
    {path : 'laptop' , component : LaptopComponent},
    {path : 'appliance' , component : ApplianceComponent}
]},
  {path: 'fashion' , component : FashionComponent ,  children :[
    {path : '' , component : FashionLanding},
    {path : 'kids' , component : KidsComponent},
    {path : 'women' , component : WomenComponent},
    {path : 'men' , component : MenComponent}
]},
  {path:'admin',component : AdminComponent},
  {path:'cart',component : CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
