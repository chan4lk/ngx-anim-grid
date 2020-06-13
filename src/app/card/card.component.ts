import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  HostBinding,
} from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() data: Card | null = null;
  @Output() clicked = new EventEmitter<Card>();

  @HostBinding('style') get style() {
    return this.data.location;
  }

  constructor() {}

  ngOnInit(): void {}
}
