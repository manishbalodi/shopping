import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { MobileComponent } from './electronic/mobile/mobile.component';
import { FashionComponent } from './fashion/fashion.component';
import { LandingComponent as ElectronicLanding } from './electronic/landing/landing.component';
import { LandingComponent as FashionLanding} from './fashion/landing/landing.component';
import { ListComponent } from './electronic/list/list.component';
import { DetailComponent } from './electronic/detail/detail.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LaptopComponent } from './electronic/laptop/laptop.component';
import { ApplianceComponent } from './electronic/appliance/appliance.component';
import { KidsComponent } from './fashion/kids/kids.component';
import { WomenComponent } from './fashion/women/women.component';
import { MenComponent } from './fashion/men/men.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ElectronicComponent,
    MobileComponent,
    FashionComponent,
    ElectronicLanding,
    FashionLanding,
    ListComponent,
    DetailComponent,
    AdminComponent,
    LaptopComponent,
    ApplianceComponent,
    KidsComponent,
    WomenComponent,
    MenComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
