import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public inputValue: string = '';

  constructor() {
  }

  public selectEmoji(emoji: string): void {
    this.inputValue += emoji;
  }
}
