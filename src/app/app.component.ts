import { Component } from '@angular/core';

import { sum } from '../lib/sum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public result = sum(1, 2);
}
