import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TimerComponent } from './components/Timer/timer.component';
import { CountdownComponent } from './components/Countdown/countdown.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TimerComponent, CountdownComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
