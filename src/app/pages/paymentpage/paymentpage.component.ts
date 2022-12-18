import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  @Input() disabled: boolean = true;

  creditCardNumberControl = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{16}$/)]);
  cvcControl = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{3}$/)]);
  expirationDateControl = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{2}\/[0-9]{2,4}$/), this.isExpirationDateValid]); //'\d{2}/\d{4}'
  isExpirationDateValid(control: FormControl) {
    const currentDate = new Date();
    const expirationDate = new Date(control.value.split("/")[1],control.value.split("/")[0]-1);
    return expirationDate > currentDate ? null : { expirationDateInvalid: true };
  }

  creditCardForm = new FormGroup({
    creditCardNumber: this.creditCardNumberControl,
    cvc: this.cvcControl,
    expirationDate: this.expirationDateControl
  });

  submit(){
    alert("valid!")
  }

  constructor(private router: Router){ }

  
  onClick(redirect: string){
    this.router.navigate([redirect]);
  }
}
  /*
  paymentForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.paymentForm = this.fb.group({
      creditCard: ['', Validators.required],
      date: ['', Validators.required],
      cvc: ['', Validators.required],
    });
  }
  */


/*
// Custom validator function
function validateVisaCvc(control: AbstractControl) {
  // Check that the visa form control has a valid Visa card number
  if (control.get('visa').value && !/^4[0-9]{12}(?:[0-9]{3})?$/.test(control.get('visa').value)) {
    return { invalidVisa: true };
  }

  // Check that the cvc form control has a valid CVC code
  if (control.get('cvc').value && !/^[0-9]{3,4}$/.test(control.get('cvc').value)) {
    return { invalidCvc: true };
  }

  return null;
}
*/
