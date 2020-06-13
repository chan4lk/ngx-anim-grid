//our root app component
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';

import { shuffle } from 'lodash';
import { CardService } from './card-service.service';
import { Card } from './card';
import { CardContainerComponent } from './card-container/card-container.component';

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
  @ViewChild(CardContainerComponent) container: CardContainerComponent;

  constructor(private service: CardService) {}
  ngOnInit(): void {
    this.items = this.service.getCards();
    this.hId = this.service.getHId(this.items);
  }
  shuffle() {
    const cards = shuffle(this.items);
    const ordered = this.service.sort(cards);
    this.items = ordered;
  }

  remove() {
    const items = [...this.items];
    items.splice(5, 1);
    const ordered = this.service.sort(items);
    this.items = ordered;
  }

  clicked(card: Card) {
    const cards = this.items.filter((i) => i !== card);
    const ordered = this.service.sort(cards);
    this.items = ordered;
  }

  reset() {
    this.items = this.service.getCards();
    this.container.reset();
  }
}
