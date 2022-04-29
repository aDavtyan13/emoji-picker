import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
// import {EmojiPickerModule} from '../../../emoji-picker/src/lib/emoji-picker.module';
import {EmojiPickerModule} from '../../../../dist/emoji-picker/lib/emoji-picker.module';

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
