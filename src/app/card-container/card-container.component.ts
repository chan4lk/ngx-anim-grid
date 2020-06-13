import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { Card } from '../card';
import { TransitionGroupComponent } from '../transtition-group/transtition-group.component';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContainerComponent implements OnInit {
  @Input() cards: Card[] = [];
  @Input() hId = '';
  @Output() clicked = new EventEmitter<Card>();

  @ViewChild(TransitionGroupComponent) transitionRoot: TransitionGroupComponent;
  constructor() {}

  ngOnInit(): void {}

  reset() {
    this.transitionRoot.reset();
  }
}
