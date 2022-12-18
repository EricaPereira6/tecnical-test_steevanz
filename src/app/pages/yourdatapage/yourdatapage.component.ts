import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-yourdatapage',
  templateUrl: './yourdatapage.component.html',
  styleUrls: ['./yourdatapage.component.scss']
})

export class YourdatapageComponent {

  // email : new FormControl('', [Validators.required, Validators.email])

  data = new FormGroup({
    firstname : new FormControl('', Validators.required)
  });

  onSubmit(){
    if (this.data.valid){
      console.log(this.data.value);
    }
  }



  @Input() whitebutton: string = 'tinted';
  @Input() blackbutton: string = 'not-tinted-white';

  @Input() size: string = 'nav-size';
  @Input() quantity: string = '50';
  @Input() comment: string = 'per month';

  @Input() text2: string = '2';
  @Input() nottintedblack: string = 'not-tinted-black';
  @Input() blackborder: string = 'black-border';

  @Input() personal: string = 'PERSONAL';
  @Input() company: string = 'COMPANY';

  
  @Input() tinystyle: string = 'tiny-label';
  @Input() titlestyle: string = 'big-title';
  @Input() style: string = 'border';
  @Input() nostyle: string = 'no-style';

  @Input() firstname: string = 'Firstname(s)*';
  @Input() lastname: string = 'Lastname(s)*';
  @Input() email: string = 'Email*';
  @Input() phone: string = 'Phone*';
  @Input() country: string = 'Country*';
  @Input() location: string = 'Location*';
  @Input() address: string = 'Address*';
  @Input() postalcode: string = 'Postal code*';
  @Input() vatnumber: string = 'VAT number*';
  @Input() offerlabel: string = 'Is this purchase an offer?';
  @Input() itext: string = "Add a custom message";
  @Input() from: string = 'From*';
  @Input() to: string = 'To*';
  @Input() messagelabel: string = "Message";
  @Input() message: string = "Write your message here";


  @Input() previous: string = 'PREVIOUS';
  @Input() next: string = 'NEXT';
  @Input() white: string = 'white';
  @Input() black: string = 'black';
  
  @Input() checkout: string = 'checkout';
  @Input() payment: string = 'payment';

}
