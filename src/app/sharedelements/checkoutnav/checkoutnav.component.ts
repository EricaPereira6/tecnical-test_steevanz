import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkoutnav',
  templateUrl: './checkoutnav.component.html',
  styleUrls: ['./checkoutnav.component.scss']
})
export class CheckoutnavComponent {

  @Input() text1: string = '1';
  @Input() text2: string = '2';
  @Input() text3: string = '3';
  @Input() text4: string = '4';
  @Input() tinted: string = 'tinted';
  @Input() nottintedwhite: string = 'not-tinted-white';
  @Input() whiteborder: string = 'white-border';

  @Input() st: string = '';
  @Input() nd: string = '';
  @Input() rd: string = '';
  @Input() th: string = '';
}
