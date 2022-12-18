import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ckoutbutton',
  templateUrl: './ckoutbutton.component.html',
  styleUrls: ['./ckoutbutton.component.scss']
})
export class CkoutbuttonComponent {

  @Input() text: string = '';
  @Input() color: string = '';
  @Input() border: string = '';

  constructor(){

  }

}
