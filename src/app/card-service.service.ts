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
        heading: 'Order 1',
        type: 'order',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Order 2',
        type: 'order',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Order 3',
        type: 'order',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Order 4',
        type: 'order',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Order 5',
        type: 'order',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Faults 1',
        type: 'fault',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Faults 2',
        type: 'fault',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Faults 3',
        type: 'fault',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Faults 4',
        type: 'fault',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Faults 5',
        type: 'fault',
        wId: 'w1 card-h2',
      },
      {
        heading: 'Notification 1',
        type: 'notificaiton',
        wId: 'w1 card-h3',
      },
      {
        heading: 'Notification 2',
        type: 'notificaiton',
        wId: 'w1 card-h3',
      },
    ];

    return cards;
  }
}
