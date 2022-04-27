import {Subscription} from 'rxjs';
import {ICategory, IDataInterface, IEmoji} from './@core/interfaces/data.interface';
import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

import {EmojiPickerService} from './emoji-picker.service';

@Component({
  selector: 'lib-emoji-picker',
  templateUrl: './emoji-picker.component.html'
})
export class EmojiPickerComponent implements OnInit, OnDestroy {
  @Input() btnIcon!: string;
  @Input() searchIcon?: string;
  @Input() customClass: string = '';
  @Input() emojisPerRow: number = 9;

  @Output() selectEmojiEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private emojiPickerService: EmojiPickerService) {
  }

  ngOnInit() {
    this.getEmojis();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private subscription!: Subscription;
  private searchTimer!: ReturnType<typeof setTimeout>;

  public data!: IDataInterface;
  public selectedEmojis!: IEmoji[];
  public searchValue: string = '';
  public showEmojiPicker: boolean = false;

  private getEmojis(): void {
    this.subscription = this.emojiPickerService.getEmojis().subscribe((data: IDataInterface) => {
      this.data = data;
    });
  }

  private unselectAllCategories(): void {
    this.data.categories.forEach((category: ICategory) => category.selected = false);
  }

  private showSelectedEmojis(index: number): void {
    this.unselectAllCategories();
    this.data.categories[index].selected = true;
    this.selectedEmojis = this.data.emojis.filter((emoji: IEmoji) => emoji.categoryId === index + 1);
  }

  public calcEmojiSize(count: number): string {
    return `${100 / count}%`;
  }

  public chooseCategory(index: number): void {
    this.showSelectedEmojis(index);
  }

  public selectEmoji(emoji: string): void {
    this.selectEmojiEvent.emit(emoji);
  }

  public toggleEmojiPicker(): void {
    this.showSelectedEmojis(0);
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  public searchElement(): void {
    if (this.searchValue) {
      clearTimeout(this.searchTimer);
      this.searchTimer = setTimeout(() => {
        this.selectedEmojis = this.data.emojis.filter((emoji: IEmoji) =>
          emoji.keywords.some((key: string) => key.toLowerCase().includes(this.searchValue.toLowerCase())) ||
          emoji.name.toLowerCase().includes(this.searchValue.toLowerCase())
        )
        this.unselectAllCategories();
      }, 800);
    } else {
      setTimeout(() => this.chooseCategory(0), 800);
    }
  }

  public closeEmojiPicker(): void {
    this.showEmojiPicker = false;
    this.searchValue = '';
  }
}
