import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my_tecnical_test_steevanz';
  showNavbar = true;
  showFooter = true;
  constructor(){
    if (window.location.pathname == '/success') {
      this.showNavbar = false;
      this.showFooter = false;
    }
  }
} 
