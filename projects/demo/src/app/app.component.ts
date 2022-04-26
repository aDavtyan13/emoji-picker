import {Component, OnInit} from '@angular/core';

import {AppService} from './app.service';
import {IDataInterface, IEmoji} from '../../../emoji-picker/src/lib/@core/interfaces/data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public data: any;
  public inputValue: string = '';
  public emojis: IEmoji[] = [];
  public categories: any[] = [];
  public emojiData!: IDataInterface;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.getEmojis();
  }

  private getEmojis(): void {
    this.appService.getEmojis().subscribe(data => {
      this.data = data;
      this.categories = [...new Map(this.data.map((item: any) => [item.category['id'], item.category])).values()];
      for (let i = 0; i < this.categories.length; i++) {
        this.categories[i].emoji = (this.data.filter((elem: any) => elem.category.id === i+1))[0].emoji;
      }
      this.emojis = this.data.map((item:any) => {
        return {
          id: item.id,
          name: item.name,
          emoji: item.emoji,
          keywords: item.keywords,
          categoryId: item.category.id
        }
      });

      this.emojiData = {...{categories: this.categories}, ...{emojis: this.emojis}};
    })
  }

  public selectEmoji(emoji: string): void {
    this.inputValue += emoji;
  }
}
