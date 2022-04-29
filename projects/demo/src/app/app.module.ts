import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {EmojiPickerModule} from 'ng-emoji-picker-unicode/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      FormsModule,
      BrowserModule,
      EmojiPickerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
