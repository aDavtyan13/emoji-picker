import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./emoji-picker.service";
import * as i2 from "../@theme/directives/outclick.directive";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "../@theme/directives/autofocus.directive";
export class EmojiPickerComponent {
    constructor(emojiPickerService) {
        this.emojiPickerService = emojiPickerService;
        this.customClass = '';
        this.emojisPerRow = 9;
        this.selectEmojiEvent = new EventEmitter();
        this.searchValue = '';
        this.showEmojiPicker = false;
    }
    ngOnInit() {
        this.getEmojis();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getEmojis() {
        this.subscription = this.emojiPickerService.getEmojis().subscribe((data) => {
            this.data = data;
        });
    }
    unselectAllCategories() {
        this.data.categories.forEach((category) => category.selected = false);
    }
    showSelectedEmojis(index) {
        this.unselectAllCategories();
        this.data.categories[index].selected = true;
        this.selectedEmojis = this.data.emojis.filter((emoji) => emoji.categoryId === index + 1);
    }
    calcEmojiSize(count) {
        return `${100 / count}%`;
    }
    chooseCategory(index) {
        this.showSelectedEmojis(index);
    }
    selectEmoji(emoji) {
        this.selectEmojiEvent.emit(emoji);
    }
    toggleEmojiPicker() {
        this.showSelectedEmojis(0);
        this.showEmojiPicker = !this.showEmojiPicker;
    }
    searchElement() {
        if (this.searchValue) {
            clearTimeout(this.searchTimer);
            this.searchTimer = setTimeout(() => {
                this.selectedEmojis = this.data.emojis.filter((emoji) => emoji.keywords.some((key) => key.toLowerCase().includes(this.searchValue.toLowerCase())) ||
                    emoji.name.toLowerCase().includes(this.searchValue.toLowerCase()));
                this.unselectAllCategories();
            }, 800);
        }
        else {
            setTimeout(() => this.chooseCategory(0), 800);
        }
    }
    closeEmojiPicker() {
        this.showEmojiPicker = false;
        this.searchValue = '';
    }
}
EmojiPickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: EmojiPickerComponent, deps: [{ token: i1.EmojiPickerService }], target: i0.ɵɵFactoryTarget.Component });
EmojiPickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.4", type: EmojiPickerComponent, selector: "lib-emoji-picker", inputs: { btnIcon: "btnIcon", searchIcon: "searchIcon", customClass: "customClass", emojisPerRow: "emojisPerRow" }, outputs: { selectEmojiEvent: "selectEmojiEvent" }, ngImport: i0, template: "<div class=\"emoji-picker\" outClick (outClickEvent)=\"closeEmojiPicker()\">\r\n  <button type=\"button\" class=\"emoji-picker--icon--btn\"\r\n          (click)=\"toggleEmojiPicker()\">\r\n    <ng-container *ngIf=\"btnIcon; else btnIconImg\">\r\n      <span class=\"{{btnIcon}} emoji-picker--icon\"></span>\r\n    </ng-container>\r\n    <ng-template #btnIconImg>\r\n      <img src=\"../assets/images/emoji.svg\" alt=\"\" class=\"emoji-picker--icon--img\">\r\n    </ng-template>\r\n  </button>\r\n  <div *ngIf=\"showEmojiPicker\" class=\"emoji-picker--block\">\r\n    <div class=\"emoji-picker--categories\">\r\n      <div class=\"emoji-picker--category\"\r\n           *ngFor=\"let category of data?.categories; let i = index;\"\r\n           (click)=\"chooseCategory(i)\"\r\n           [ngClass]=\"{'selected': category?.selected}\"\r\n           [ngStyle]=\"{'width': calcEmojiSize(data.categories.length)}\">\r\n        <div>{{category?.emoji}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"emoji-picker--search\">\r\n      <input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"searchValue\" (input)=\"searchElement()\" autofocus>\r\n      <ng-container *ngIf=\"searchIcon; else searchIconImg\">\r\n        <span class=\"{{searchIcon}} emoji-picker--icon\"></span>\r\n      </ng-container>\r\n      <ng-template #searchIconImg>\r\n        <img src=\"../assets/images/search.svg\" class=\"emoji-picker--icon--img\" alt=\"\">\r\n      </ng-template>\r\n    </div>\r\n    <div class=\"emoji-picker--emojis\">\r\n      <div class=\"emoji-picker--emoji\"\r\n           *ngFor=\"let emoji of selectedEmojis\"\r\n           (click)=\"selectEmoji(emoji.emoji)\"\r\n           [ngStyle]=\"{'width': calcEmojiSize(emojisPerRow)}\">\r\n        <div title=\"{{emoji?.name}}\">{{emoji?.emoji}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", directives: [{ type: i2.OutClickDirective, selector: "[outClick]", outputs: ["outClickEvent"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i5.AutofocusDirective, selector: "[autofocus]" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: EmojiPickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-emoji-picker', template: "<div class=\"emoji-picker\" outClick (outClickEvent)=\"closeEmojiPicker()\">\r\n  <button type=\"button\" class=\"emoji-picker--icon--btn\"\r\n          (click)=\"toggleEmojiPicker()\">\r\n    <ng-container *ngIf=\"btnIcon; else btnIconImg\">\r\n      <span class=\"{{btnIcon}} emoji-picker--icon\"></span>\r\n    </ng-container>\r\n    <ng-template #btnIconImg>\r\n      <img src=\"../assets/images/emoji.svg\" alt=\"\" class=\"emoji-picker--icon--img\">\r\n    </ng-template>\r\n  </button>\r\n  <div *ngIf=\"showEmojiPicker\" class=\"emoji-picker--block\">\r\n    <div class=\"emoji-picker--categories\">\r\n      <div class=\"emoji-picker--category\"\r\n           *ngFor=\"let category of data?.categories; let i = index;\"\r\n           (click)=\"chooseCategory(i)\"\r\n           [ngClass]=\"{'selected': category?.selected}\"\r\n           [ngStyle]=\"{'width': calcEmojiSize(data.categories.length)}\">\r\n        <div>{{category?.emoji}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"emoji-picker--search\">\r\n      <input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"searchValue\" (input)=\"searchElement()\" autofocus>\r\n      <ng-container *ngIf=\"searchIcon; else searchIconImg\">\r\n        <span class=\"{{searchIcon}} emoji-picker--icon\"></span>\r\n      </ng-container>\r\n      <ng-template #searchIconImg>\r\n        <img src=\"../assets/images/search.svg\" class=\"emoji-picker--icon--img\" alt=\"\">\r\n      </ng-template>\r\n    </div>\r\n    <div class=\"emoji-picker--emojis\">\r\n      <div class=\"emoji-picker--emoji\"\r\n           *ngFor=\"let emoji of selectedEmojis\"\r\n           (click)=\"selectEmoji(emoji.emoji)\"\r\n           [ngStyle]=\"{'width': calcEmojiSize(emojisPerRow)}\">\r\n        <div title=\"{{emoji?.name}}\">{{emoji?.emoji}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: i1.EmojiPickerService }]; }, propDecorators: { btnIcon: [{
                type: Input
            }], searchIcon: [{
                type: Input
            }], customClass: [{
                type: Input
            }], emojisPerRow: [{
                type: Input
            }], selectEmojiEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vtb2ppLXBpY2tlci9zcmMvbGliL2Vtb2ppLXBpY2tlci9lbW9qaS1waWNrZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZW1vamktcGlja2VyL3NyYy9saWIvZW1vamktcGlja2VyL2Vtb2ppLXBpY2tlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQVF4RixNQUFNLE9BQU8sb0JBQW9CO0lBUS9CLFlBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBTGpELGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLHFCQUFnQixHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBa0J2RSxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFZLEtBQUssQ0FBQztJQWhCeEMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFVTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBb0IsRUFBRSxFQUFFO1lBQ3pGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHFCQUFxQjtRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFtQixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxLQUFhO1FBQ3RDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFTSxhQUFhLENBQUMsS0FBYTtRQUNoQyxPQUFPLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFFTSxjQUFjLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLFdBQVcsQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDL0MsQ0FBQztJQUVNLGFBQWE7UUFDbEIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQzlELEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztvQkFDaEcsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUNsRSxDQUFBO2dCQUNELElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQy9CLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNUO2FBQU07WUFDTCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7SUFFTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7aUhBOUVVLG9CQUFvQjtxR0FBcEIsb0JBQW9CLCtOQ1ZqQyxxMERBdUNBOzJGRDdCYSxvQkFBb0I7a0JBSmhDLFNBQVM7K0JBQ0Usa0JBQWtCO3lHQUluQixPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBRUksZ0JBQWdCO3NCQUF6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtJQ2F0ZWdvcnksIElEYXRhSW50ZXJmYWNlLCBJRW1vaml9IGZyb20gJy4uL0Bjb3JlL2ludGVyZmFjZXMvZGF0YS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Vtb2ppUGlja2VyU2VydmljZX0gZnJvbSAnLi9lbW9qaS1waWNrZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1lbW9qaS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZW1vamktcGlja2VyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBFbW9qaVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgYnRuSWNvbiE6IHN0cmluZztcbiAgQElucHV0KCkgc2VhcmNoSWNvbj86IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBlbW9qaXNQZXJSb3c6IG51bWJlciA9IDk7XG5cbiAgQE91dHB1dCgpIHNlbGVjdEVtb2ppRXZlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbW9qaVBpY2tlclNlcnZpY2U6IEVtb2ppUGlja2VyU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZXRFbW9qaXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBzZWFyY2hUaW1lciE6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+O1xuXG4gIHB1YmxpYyBkYXRhITogSURhdGFJbnRlcmZhY2U7XG4gIHB1YmxpYyBzZWxlY3RlZEVtb2ppcyE6IElFbW9qaVtdO1xuICBwdWJsaWMgc2VhcmNoVmFsdWU6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgc2hvd0Vtb2ppUGlja2VyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBnZXRFbW9qaXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmVtb2ppUGlja2VyU2VydmljZS5nZXRFbW9qaXMoKS5zdWJzY3JpYmUoKGRhdGE6IElEYXRhSW50ZXJmYWNlKSA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1bnNlbGVjdEFsbENhdGVnb3JpZXMoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhLmNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnk6IElDYXRlZ29yeSkgPT4gY2F0ZWdvcnkuc2VsZWN0ZWQgPSBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIHNob3dTZWxlY3RlZEVtb2ppcyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy51bnNlbGVjdEFsbENhdGVnb3JpZXMoKTtcbiAgICB0aGlzLmRhdGEuY2F0ZWdvcmllc1tpbmRleF0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc2VsZWN0ZWRFbW9qaXMgPSB0aGlzLmRhdGEuZW1vamlzLmZpbHRlcigoZW1vamk6IElFbW9qaSkgPT4gZW1vamkuY2F0ZWdvcnlJZCA9PT0gaW5kZXggKyAxKTtcbiAgfVxuXG4gIHB1YmxpYyBjYWxjRW1vamlTaXplKGNvdW50OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHsxMDAgLyBjb3VudH0lYDtcbiAgfVxuXG4gIHB1YmxpYyBjaG9vc2VDYXRlZ29yeShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zaG93U2VsZWN0ZWRFbW9qaXMoaW5kZXgpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdEVtb2ppKGVtb2ppOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdEVtb2ppRXZlbnQuZW1pdChlbW9qaSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlRW1vamlQaWNrZXIoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93U2VsZWN0ZWRFbW9qaXMoMCk7XG4gICAgdGhpcy5zaG93RW1vamlQaWNrZXIgPSAhdGhpcy5zaG93RW1vamlQaWNrZXI7XG4gIH1cblxuICBwdWJsaWMgc2VhcmNoRWxlbWVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWFyY2hWYWx1ZSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2VhcmNoVGltZXIpO1xuICAgICAgdGhpcy5zZWFyY2hUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdGVkRW1vamlzID0gdGhpcy5kYXRhLmVtb2ppcy5maWx0ZXIoKGVtb2ppOiBJRW1vamkpID0+XG4gICAgICAgICAgZW1vamkua2V5d29yZHMuc29tZSgoa2V5OiBzdHJpbmcpID0+IGtleS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkpIHx8XG4gICAgICAgICAgZW1vamkubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnVuc2VsZWN0QWxsQ2F0ZWdvcmllcygpO1xuICAgICAgfSwgODAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNob29zZUNhdGVnb3J5KDApLCA4MDApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbG9zZUVtb2ppUGlja2VyKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0Vtb2ppUGlja2VyID0gZmFsc2U7XG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9ICcnO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZW1vamktcGlja2VyXCIgb3V0Q2xpY2sgKG91dENsaWNrRXZlbnQpPVwiY2xvc2VFbW9qaVBpY2tlcigpXCI+XHJcbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJlbW9qaS1waWNrZXItLWljb24tLWJ0blwiXHJcbiAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlRW1vamlQaWNrZXIoKVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImJ0bkljb247IGVsc2UgYnRuSWNvbkltZ1wiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInt7YnRuSWNvbn19IGVtb2ppLXBpY2tlci0taWNvblwiPjwvc3Bhbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLXRlbXBsYXRlICNidG5JY29uSW1nPlxyXG4gICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWFnZXMvZW1vamkuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJlbW9qaS1waWNrZXItLWljb24tLWltZ1wiPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICA8L2J1dHRvbj5cclxuICA8ZGl2ICpuZ0lmPVwic2hvd0Vtb2ppUGlja2VyXCIgY2xhc3M9XCJlbW9qaS1waWNrZXItLWJsb2NrXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktcGlja2VyLS1jYXRlZ29yaWVzXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1waWNrZXItLWNhdGVnb3J5XCJcclxuICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgZGF0YT8uY2F0ZWdvcmllczsgbGV0IGkgPSBpbmRleDtcIlxyXG4gICAgICAgICAgIChjbGljayk9XCJjaG9vc2VDYXRlZ29yeShpKVwiXHJcbiAgICAgICAgICAgW25nQ2xhc3NdPVwieydzZWxlY3RlZCc6IGNhdGVnb3J5Py5zZWxlY3RlZH1cIlxyXG4gICAgICAgICAgIFtuZ1N0eWxlXT1cInsnd2lkdGgnOiBjYWxjRW1vamlTaXplKGRhdGEuY2F0ZWdvcmllcy5sZW5ndGgpfVwiPlxyXG4gICAgICAgIDxkaXY+e3tjYXRlZ29yeT8uZW1vaml9fTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLXBpY2tlci0tc2VhcmNoXCI+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgWyhuZ01vZGVsKV09XCJzZWFyY2hWYWx1ZVwiIChpbnB1dCk9XCJzZWFyY2hFbGVtZW50KClcIiBhdXRvZm9jdXM+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWFyY2hJY29uOyBlbHNlIHNlYXJjaEljb25JbWdcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInt7c2VhcmNoSWNvbn19IGVtb2ppLXBpY2tlci0taWNvblwiPjwvc3Bhbj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjc2VhcmNoSWNvbkltZz5cclxuICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWFnZXMvc2VhcmNoLnN2Z1wiIGNsYXNzPVwiZW1vamktcGlja2VyLS1pY29uLS1pbWdcIiBhbHQ9XCJcIj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLXBpY2tlci0tZW1vamlzXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1waWNrZXItLWVtb2ppXCJcclxuICAgICAgICAgICAqbmdGb3I9XCJsZXQgZW1vamkgb2Ygc2VsZWN0ZWRFbW9qaXNcIlxyXG4gICAgICAgICAgIChjbGljayk9XCJzZWxlY3RFbW9qaShlbW9qaS5lbW9qaSlcIlxyXG4gICAgICAgICAgIFtuZ1N0eWxlXT1cInsnd2lkdGgnOiBjYWxjRW1vamlTaXplKGVtb2ppc1BlclJvdyl9XCI+XHJcbiAgICAgICAgPGRpdiB0aXRsZT1cInt7ZW1vamk/Lm5hbWV9fVwiPnt7ZW1vamk/LmVtb2ppfX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==