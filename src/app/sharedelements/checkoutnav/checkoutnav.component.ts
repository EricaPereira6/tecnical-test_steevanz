import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkoutnav',
  templateUrl: './checkoutnav.component.html',
  styleUrls: ['./checkoutnav.component.scss']
})
export class CheckoutnavComponent {

  @Input() text1: String = '1';
  @Input() text2: String = '2';
  @Input() text3: String = '3';
  @Input() text4: String = '4';
  @Input() tinted: String = 'tinted';
  @Input() nottinted: String = 'nottinted';



}
