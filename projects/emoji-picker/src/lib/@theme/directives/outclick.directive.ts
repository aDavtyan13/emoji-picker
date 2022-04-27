import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[outClick]'
})
export class OutClickDirective {
  constructor(private elRef: ElementRef) {}
  @Output() outClickEvent: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('document:click', ['$event'])
  toggleOpen(event: any) {
    if ((!this.elRef.nativeElement.contains(event.target)) && !(event.target.className.includes('emoji-picker--block'))) {
      this.outClickEvent.emit();
    }
  }
}
