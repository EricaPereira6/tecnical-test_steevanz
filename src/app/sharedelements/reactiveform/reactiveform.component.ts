import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent {

  data = new FormGroup({
    firstname : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email])
  });
  


}
