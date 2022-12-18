import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.scss']
})
export class CheckoutpageComponent {

  @Input() whitebutton: string = 'tinted';
  @Input() blackbutton: string = 'not-tinted-white';

  @Input() text1: string = '1';
  @Input() nottintedblack: string = 'not-tinted-black';
  @Input() blackborder: string = 'black-border';

  @Input() itext: string = 'Write here your coupon';
  @Input() ltext: string = 'Do you have a discount coupon?';
  @Input() style: string = 'big-title';
  @Input() iconsrc: string = 'assets/images/ei_refresh.png';
  @Input() border: string = 'border';

  @Input() size: string = 'normal-size';
  @Input() quantity: string = '50';
  @Input() comment: string = 'per month.';
  
  @Input() clean: string = 'CLEAN CART';
  @Input() next: string = 'NEXT';
  @Input() white: string = 'white';
  @Input() black: string = 'black';
  
  @Input() homepage: string = '';
  @Input() yourdata: string = 'yourdata';

}
