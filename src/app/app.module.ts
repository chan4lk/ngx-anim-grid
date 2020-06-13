import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TransitionGroupComponent } from './transtition-group/transtition-group.component';
import { TransitionGroupItemDirective } from './transtion-group.directive';
import { CardContainerComponent } from './card-container/card-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TransitionGroupComponent,
    TransitionGroupItemDirective,
    CardContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
