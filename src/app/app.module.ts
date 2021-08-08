import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { MobileComponent } from './electronic/mobile/mobile.component';
import { FashionComponent } from './fashion/fashion.component';
import { LandingComponent } from './electronic/landing/landing.component';
import { ListComponent } from './electronic/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ElectronicComponent,
    MobileComponent,
    FashionComponent,
    LandingComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
