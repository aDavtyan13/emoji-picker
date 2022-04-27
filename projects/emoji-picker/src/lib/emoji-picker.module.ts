import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {EmojiPickerComponent} from './emoji-picker.component';
import {OutClickDirective} from './@theme/directives/outclick.directive';
import {AutofocusDirective} from './@theme/directives/autofocus.directive';

@NgModule({
  declarations: [
    OutClickDirective,
    AutofocusDirective,
    EmojiPickerComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [
    EmojiPickerComponent
  ]
})
export class EmojiPickerModule {
}
