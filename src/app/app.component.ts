//our root app component
import { Component } from '@angular/core';

import { shuffle } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  state = 'flip-list';
  init = true;
  shuffle() {
    this.items = shuffle(this.items);
  }

  remove() {
    const items = [...this.items];
    items.splice(5, 1);
    this.items = items;
  }

  reset() {
    this.items.push(10);
  }
}
