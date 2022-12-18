import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.scss']
})
export class PaymentpageComponent {

  @Input() whitebutton: string = 'tinted';
  @Input() blackbutton: string = 'not-tinted-white';

  @Input() size: string = 'nav-size';
  @Input() quantity: string = '31,98';
  @Input() comment: string = '26,99€ (Product) + 4,99€ (Delivery Fee)';

  @Input() text2: string = '4';
  @Input() nottintedblack: string = 'not-tinted-black';
  @Input() blackborder: string = 'black-border';

  
  @Input() creditcard: string = 'Credit Card*';
  @Input() date: string = 'Expiration Date*';
  @Input() cvc: string = 'CVC*';

  @Input() tinystyle: string = 'tiny-label';
  @Input() titlestyle: string = 'big-title';
  @Input() style: string = 'border';
  @Input() nostyle: string = 'no-style';


  @Input() previous: string = 'PREVIOUS';
  @Input() next: string = 'CHECKOUT';
  @Input() white: string = 'white';
  @Input() black: string = 'black';
  
  @Input() yourdata: string = 'yourdata';
  @Input() success: string = 'success';

}
