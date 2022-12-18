import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedelements/navbar/navbar.component';
import { FooterComponent } from './sharedelements/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PaymentpageComponent } from './pages/paymentpage/paymentpage.component';
import { YourdatapageComponent } from './pages/yourdatapage/yourdatapage.component';
import { SuccesspageComponent } from './pages/successpage/successpage.component';
import { CheckoutpageComponent } from './pages/checkoutpage/checkoutpage.component';
import { CheckoutnavComponent } from './sharedelements/checkoutnav/checkoutnav.component';
import { CkoutbuttonComponent } from './sharedelements/singlecomponents/ckoutbutton/ckoutbutton.component';
import { FreedelivbarComponent } from './sharedelements/freedelivbar/freedelivbar.component';
import { GenericbuttonComponent } from './sharedelements/singlecomponents/genericbutton/genericbutton.component';
import { TextinputComponent } from './sharedelements/singlecomponents/textinput/textinput.component';
import { TotalpermonthComponent } from './sharedelements/totalpermonth/totalpermonth.component';
import { RestcountriesComponent } from './sharedelements/restcountries/restcountries.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    PaymentpageComponent,
    YourdatapageComponent,
    SuccesspageComponent,
    CheckoutpageComponent,
    CheckoutnavComponent,
    CkoutbuttonComponent,
    FreedelivbarComponent,
    GenericbuttonComponent,
    TextinputComponent,
    TotalpermonthComponent,
    RestcountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
