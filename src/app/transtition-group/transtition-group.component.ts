import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { TransitionGroupItemDirective } from '../transtion-group.directive';

@Component({
  selector: '[transition-group]',
  template: '<ng-content></ng-content>',
})
export class TransitionGroupComponent implements AfterContentInit {
  @Input('transition-group') class;

  @ContentChildren(TransitionGroupItemDirective) items: QueryList<
    TransitionGroupItemDirective
  >;

  ngAfterContentInit() {
    this.reset();
  }

  public reset() {
    this.refreshPosition('prevPos');
    this.items.changes.subscribe((items) => {
      items.forEach((item) => {
        item.prevPos = item.newPos || item.prevPos;
      });
      items.forEach(this.runCallback);
      this.refreshPosition('newPos');
      items.forEach(this.applyTranslation);
      // force reflow to put everything in position
      const offSet = document.body.offsetHeight;
      this.items.forEach(this.runTransition.bind(this));
    });
  }

  private runCallback(item: TransitionGroupItemDirective) {
    if (item.moveCallback) {
      item.moveCallback();
    }
  }

  private runTransition(item: TransitionGroupItemDirective) {
    if (!item.moved) {
      return;
    }
    const cssClass = this.class + '-move';
    let el = item.el;
    let style: any = el.style;
    el.classList.add(cssClass);
    style.transform = style.WebkitTransform = style.transitionDuration = '';
    el.addEventListener(
      'transitionend',
      (item.moveCallback = (e: any) => {
        if (!e || /transform$/.test(e.propertyName)) {
          el.removeEventListener('transitionend', item.moveCallback);
          item.moveCallback = null;
          el.classList.remove(cssClass);
        }
      })
    );
  }

  private refreshPosition(prop: string) {
    this.items.forEach((item) => {
      item[prop] = item.el.getBoundingClientRect();
    });
  }

  private applyTranslation(item: TransitionGroupItemDirective) {
    item.moved = false;

    const dx = item.prevPos.left - item.newPos.left;
    const dy = item.prevPos.top - item.newPos.top;
    if (dx || dy) {
      item.moved = true;
      let style: any = item.el.style;
      style.transform = style.WebkitTransform =
        'translate(' + dx + 'px,' + dy + 'px)';
      style.transitionDuration = '0s';
    }
  }
}
