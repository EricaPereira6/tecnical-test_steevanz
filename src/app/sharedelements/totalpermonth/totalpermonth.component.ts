import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-totalpermonth',
  templateUrl: './totalpermonth.component.html',
  styleUrls: ['./totalpermonth.component.scss']
})
export class TotalpermonthComponent {

  @Input() size: string = '';
  @Input() quantity: string = '';
  @Input() additionalcomment: string = '';
}
