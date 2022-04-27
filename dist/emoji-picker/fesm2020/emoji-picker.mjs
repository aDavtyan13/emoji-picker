import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Directive, Output, HostListener, Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from '@angular/forms';
import { FormsModule } from '@angular/forms';

class EmojiPickerService {
    constructor(http) {
        this.http = http;
    }
    getEmojis() {
        return this.http.get('./assets/data/emojis.json');
    }
}
EmojiPickerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: EmojiPickerService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
EmojiPickerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: EmojiPickerService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: EmojiPickerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });

class OutClickDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.outClickEvent = new EventEmitter();
    }
    toggleOpen(event) {
        if ((!this.elRef.nativeElement.contains(event.target)) && !(event.target.className?.includes('emoji-picker--block'))) {
            this.outClickEvent.emit();
        }
    }
}
OutClickDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: OutClickDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
OutClickDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.4", type: OutClickDirective, selector: "[outClick]", outputs: { outClickEvent: "outClickEvent" }, host: { listeners: { "document:click": "toggleOpen($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: OutClickDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[outClick]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { outClickEvent: [{
                type: Output
            }], toggleOpen: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class AutofocusDirective {
    constructor(element) {
        this.element = element;
    }
    ngOnInit() {
        this.element.nativeElement.focus();
    }
}
AutofocusDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: AutofocusDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
AutofocusDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.4", type: AutofocusDirective, selector: "[autofocus]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: AutofocusDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[autofocus]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });

class EmojiPickerComponent {
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
EmojiPickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: EmojiPickerComponent, deps: [{ token: EmojiPickerService }], target: i0.ɵɵFactoryTarget.Component });
EmojiPickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.4", type: EmojiPickerComponent, selector: "lib-emoji-picker", inputs: { btnIcon: "btnIcon", searchIcon: "searchIcon", customClass: "customClass", emojisPerRow: "emojisPerRow" }, outputs: { selectEmojiEvent: "selectEmojiEvent" }, ngImport: i0, template: "<div class=\"emoji-picker\" outClick (outClickEvent)=\"closeEmojiPicker()\">\r\n  <button type=\"button\" class=\"emoji-picker--icon--btn\"\r\n          (click)=\"toggleEmojiPicker()\">\r\n    <ng-container *ngIf=\"btnIcon; else btnIconImg\">\r\n      <span class=\"{{btnIcon}} emoji-picker--icon\"></span>\r\n    </ng-container>\r\n    <ng-template #btnIconImg>\r\n      <img src=\"../assets/images/emoji.svg\" alt=\"\" class=\"emoji-picker--icon--img\">\r\n    </ng-template>\r\n  </button>\r\n  <div *ngIf=\"showEmojiPicker\" class=\"emoji-picker--block\">\r\n    <div class=\"emoji-picker--categories\">\r\n      <div class=\"emoji-picker--category\"\r\n           *ngFor=\"let category of data?.categories; let i = index;\"\r\n           (click)=\"chooseCategory(i)\"\r\n           [ngClass]=\"{'selected': category?.selected}\"\r\n           [ngStyle]=\"{'width': calcEmojiSize(data.categories.length)}\">\r\n        <div>{{category?.emoji}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"emoji-picker--search\">\r\n      <input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"searchValue\" (input)=\"searchElement()\" autofocus>\r\n      <ng-container *ngIf=\"searchIcon; else searchIconImg\">\r\n        <span class=\"{{searchIcon}} emoji-picker--icon\"></span>\r\n      </ng-container>\r\n      <ng-template #searchIconImg>\r\n        <img src=\"../assets/images/search.svg\" class=\"emoji-picker--icon--img\" alt=\"\">\r\n      </ng-template>\r\n    </div>\r\n    <div class=\"emoji-picker--emojis\">\r\n      <div class=\"emoji-picker--emoji\"\r\n           *ngFor=\"let emoji of selectedEmojis\"\r\n           (click)=\"selectEmoji(emoji.emoji)\"\r\n           [ngStyle]=\"{'width': calcEmojiSize(emojisPerRow)}\">\r\n        <div title=\"{{emoji?.name}}\">{{emoji?.emoji}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", directives: [{ type: OutClickDirective, selector: "[outClick]", outputs: ["outClickEvent"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: AutofocusDirective, selector: "[autofocus]" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: EmojiPickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-emoji-picker', template: "<div class=\"emoji-picker\" outClick (outClickEvent)=\"closeEmojiPicker()\">\r\n  <button type=\"button\" class=\"emoji-picker--icon--btn\"\r\n          (click)=\"toggleEmojiPicker()\">\r\n    <ng-container *ngIf=\"btnIcon; else btnIconImg\">\r\n      <span class=\"{{btnIcon}} emoji-picker--icon\"></span>\r\n    </ng-container>\r\n    <ng-template #btnIconImg>\r\n      <img src=\"../assets/images/emoji.svg\" alt=\"\" class=\"emoji-picker--icon--img\">\r\n    </ng-template>\r\n  </button>\r\n  <div *ngIf=\"showEmojiPicker\" class=\"emoji-picker--block\">\r\n    <div class=\"emoji-picker--categories\">\r\n      <div class=\"emoji-picker--category\"\r\n           *ngFor=\"let category of data?.categories; let i = index;\"\r\n           (click)=\"chooseCategory(i)\"\r\n           [ngClass]=\"{'selected': category?.selected}\"\r\n           [ngStyle]=\"{'width': calcEmojiSize(data.categories.length)}\">\r\n        <div>{{category?.emoji}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"emoji-picker--search\">\r\n      <input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"searchValue\" (input)=\"searchElement()\" autofocus>\r\n      <ng-container *ngIf=\"searchIcon; else searchIconImg\">\r\n        <span class=\"{{searchIcon}} emoji-picker--icon\"></span>\r\n      </ng-container>\r\n      <ng-template #searchIconImg>\r\n        <img src=\"../assets/images/search.svg\" class=\"emoji-picker--icon--img\" alt=\"\">\r\n      </ng-template>\r\n    </div>\r\n    <div class=\"emoji-picker--emojis\">\r\n      <div class=\"emoji-picker--emoji\"\r\n           *ngFor=\"let emoji of selectedEmojis\"\r\n           (click)=\"selectEmoji(emoji.emoji)\"\r\n           [ngStyle]=\"{'width': calcEmojiSize(emojisPerRow)}\">\r\n        <div title=\"{{emoji?.name}}\">{{emoji?.emoji}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: EmojiPickerService }]; }, propDecorators: { btnIcon: [{
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

class EmojiPickerModule {
}
EmojiPickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: EmojiPickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EmojiPickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: EmojiPickerModule, declarations: [OutClickDirective,
        AutofocusDirective,
        EmojiPickerComponent], imports: [FormsModule,
        CommonModule,
        HttpClientModule], exports: [EmojiPickerComponent] });
EmojiPickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: EmojiPickerModule, imports: [[
            FormsModule,
            CommonModule,
            HttpClientModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.4", ngImport: i0, type: EmojiPickerModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });

/*
 * Public API Surface of emoji-picker
 */

/**
 * Generated bundle index. Do not edit.
 */

export { EmojiPickerComponent, EmojiPickerModule, EmojiPickerService };
//# sourceMappingURL=emoji-picker.mjs.map
