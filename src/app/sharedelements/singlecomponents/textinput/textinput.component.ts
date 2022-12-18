import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() formName: string = '';

  @Input() firstname: string = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter();

  onInput(event: any) {
    //this.valueChange.emit(value);
    console.log("event", event);
  } 

}
