import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedelements/navbar/navbar.component';
import { FooterComponent } from './sharedelements/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PaymentpageComponent } from './pages/paymentpage/paymentpage.component';
import { YourdatapageComponent } from './pages/yourdatapage/yourdatapage.component';
import { SuccesspageComponent } from './pages/successpage/successpage.component';
import { CheckoutpageComponent } from './pages/checkoutpage/checkoutpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    PaymentpageComponent,
    YourdatapageComponent,
    SuccesspageComponent,
    CheckoutpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
