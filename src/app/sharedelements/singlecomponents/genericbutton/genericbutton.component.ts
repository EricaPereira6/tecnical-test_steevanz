import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genericbutton',
  templateUrl: './genericbutton.component.html',
  styleUrls: ['./genericbutton.component.scss'],
})
export class GenericbuttonComponent {

  @Input() text: string = '';
  @Input() border: string = '';
  @Input() redirect: string = '';

  constructor(private router: Router){ }

  
  onClick(redirect: string){
    this.router.navigate([redirect]);
  }
}
