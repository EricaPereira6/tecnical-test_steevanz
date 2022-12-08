import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutpageComponent } from './pages/checkoutpage/checkoutpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PaymentpageComponent } from './pages/paymentpage/paymentpage.component';
import { SuccesspageComponent } from './pages/successpage/successpage.component';
import { YourdatapageComponent } from './pages/yourdatapage/yourdatapage.component';

const routes: Routes = [
  {path: '',         component: HomepageComponent},
  {path: 'checkout', component: CheckoutpageComponent},
  {path: 'yourdata', component: YourdatapageComponent},
  {path: 'payment',  component: PaymentpageComponent},
  {path: 'success',  component: SuccesspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
