# EmojiPicker

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

This library will help you to use Unicode emojis. There are 8 categories with 1525 emojis.

### Attributes
Attributes   | Description
-------------|--------------
@Input() <br> **customClass**: string | You can add custom class to customize plugin
@Input() <br> **btnIcon**: string | You can add custom icon to button, from where emoji picker will open <br> default icon - <img src="https://freesvg.org/img/1456705995.png" height="20px" width="20px">
@Input() <br> **searchIcon**: string | You can add custom search icon to search input <br> default icon - <img src="https://icons.veryicon.com/png/o/miscellaneous/easemob-icon/search-934.png" height="20px" width="20px"> 
@Input() <br> **emojisPerRow**: string | You can add number to indicate how many emojis will be in one row <br> defatuls is 9
@Output() <br> **selectEmojiEvent**: EventEmitter< string >() | Event will be fired when emoji selected

### Example and Sample Code
1) **Import _'EmojiPickerModule'_ in your app module**
```ts
import { EmojiPickerModule } from "emoji-picker";
  
@NgModule({
  imports:[
    ..
    EmojiPickerModule
    ..
  ]
})
``` 

2) **Add _'emoji-picker'_ in your component html**
```html
<lib-emoji-picker   [data]="emojiData"
                    [customClass]="'customClass'"
                    [emojisPerRow]="7"
                    [btnIcon]="'fas fa-smile'"
                    [searchIcon]="'fas fa-search'"
                    (selectEmojiEvent)="selectEmoji($event)"></lib-emoji-picker>
```

3) **Add a method in your component class to listen for **selectEmojiEvent** event**
```ts
selectEmoji(emoji: string): void {
  console.log(emoji);
}
```
