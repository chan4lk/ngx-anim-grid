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
        heading: 'Bill',
        type: 'bill',
        wId: 'w1',
      },
      {
        heading: 'Bill',
        type: 'bill',
        wId: 'w1',
      },
      {
        heading: 'Bill',
        type: 'bill',
        wId: 'w1',
      },
      {
        heading: 'Bill',
        type: 'bill',
        wId: 'w1',
      },
      {
        heading: 'Bill',
        type: 'bill',
        wId: 'w1',
      },
      {
        heading: 'Bill',
        type: 'bill',
        wId: 'w1',
      },
      {
        heading: 'Bill',
        type: 'bill',
        wId: 'w1',
      },
      {
        heading: 'Bill',
        type: 'bill',
        wId: 'w1',
      },
      {
        heading: 'Bill',
        type: 'bill',
        wId: 'w1',
      },
      {
        heading: 'Bill',
        type: 'bill',
        wId: 'w1',
      },
      {
        heading: 'Bill',
        type: 'bill',
        wId: 'w1',
      },
      {
        heading: 'Bill',
        type: 'bill',
        wId: 'w1',
      },
      {
        heading: 'Bill',
        type: 'bill',
        wId: 'w1',
      },
    ];

    return cards;
  }
}
