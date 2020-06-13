import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor() {}

  getHId(items: any): string {
    return 'h1';
  }

  getCards() {
    const cards: Card[] = [
      {
        heading: 'Bill 1',
        type: 'bill',
        wId: 'w1 card-h1',
      },
      {
        heading: 'Bill 2',
        type: 'bill',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Bill 3',
        type: 'bill',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Bill 4',
        type: 'bill',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Bill 5',
        type: 'bill',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Bill 6',
        type: 'bill',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Bill 7',
        type: 'bill',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Bill 8',
        type: 'bill',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Bill 9',
        type: 'bill',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Bill 10',
        type: 'bill',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Bill 11',
        type: 'bill',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Bill 12',
        type: 'bill',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Bill 13',
        type: 'bill',
        wId: 'w1 card-h2',
      },
    ];

    return cards;
  }
}
