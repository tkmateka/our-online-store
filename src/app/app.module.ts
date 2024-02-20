import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { SliderComponent } from './components/shared/slider/slider.component';
import { RoundCardComponent } from './components/shared/round-card/round-card.component';
import { SquareCardComponent } from './components/shared/square-card/square-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthPopupComponent } from './components/shared/auth-popup/auth-popup.component';
import { SupplierComponent } from './components/main-supplier/supplier/supplier.component';
import { SupplierDashboardComponent } from './components/main-supplier/supplier-dashboard/supplier-dashboard.component';
import { SupplierToolbarComponent } from './components/main-supplier/supplier-toolbar/supplier-toolbar.component';

import { NgChartsModule } from 'ng2-charts';
import { PieComponent } from './components/charts/pie/pie.component';
import { BarComponent } from './components/charts/bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    SliderComponent,
    RoundCardComponent,
    SquareCardComponent,
    AuthPopupComponent,
    SupplierComponent,
    SupplierDashboardComponent,
    SupplierToolbarComponent,
    PieComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
