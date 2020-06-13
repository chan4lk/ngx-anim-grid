//our root app component
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { shuffle } from 'lodash';
import { CardService } from './card-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  items = null;
  state = 'flip-list';
  init = true;
  hId = '';

  constructor(private service: CardService) {}
  ngOnInit(): void {
    this.items = this.service.getCards();
    this.hId = this.service.getHId(this.items);
  }
  shuffle() {
    this.items = shuffle(this.items);
  }

  remove() {
    const items = [...this.items];
    items.splice(5, 1);
    this.items = items;
  }

  reset() {
    this.items = this.service.getCards();
  }
}
