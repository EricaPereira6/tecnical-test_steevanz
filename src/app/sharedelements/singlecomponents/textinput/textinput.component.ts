import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss']
})
export class TextinputComponent {

  @Input() inputtext: string = '';
  @Input() labeltext: string = '';
  @Input() labelstyle: string = '';
  @Input() inputbar: string = '';
  @Input() icon: string = '';
  

}
