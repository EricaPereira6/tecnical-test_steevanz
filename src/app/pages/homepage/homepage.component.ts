import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  @Input() text: string = 'SUBSCRIBE';
  @Input() black: string = 'black';

}
