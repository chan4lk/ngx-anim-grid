import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContainerComponent implements OnInit {
  @Input() cards: Card[] = [];
  @Input() hId = '';

  constructor() {}

  ngOnInit(): void {}
}
