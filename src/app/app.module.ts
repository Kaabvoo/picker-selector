import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PickerSelectorComponent } from './stand-alone/picker-selector/picker-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    PickerSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
