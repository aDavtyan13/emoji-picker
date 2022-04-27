import { ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class OutClickDirective {
    private elRef;
    constructor(elRef: ElementRef);
    outClickEvent: EventEmitter<any>;
    toggleOpen(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OutClickDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<OutClickDirective, "[outClick]", never, {}, { "outClickEvent": "outClickEvent"; }, never>;
}
