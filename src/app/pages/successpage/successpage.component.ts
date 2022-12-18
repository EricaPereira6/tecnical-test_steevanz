import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-successpage',
  templateUrl: './successpage.component.html',
  styleUrls: ['./successpage.component.scss']
})
export class SuccesspageComponent {

  @Input() home: string = 'HOME';
  @Input() black: string = 'black';
  
  @Input() homepage: string = '';

}
