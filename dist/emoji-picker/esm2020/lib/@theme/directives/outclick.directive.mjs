import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class OutClickDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.outClickEvent = new EventEmitter();
    }
    toggleOpen(event) {
        if ((!this.elRef.nativeElement.contains(event.target)) && !(event.target.className.includes('emoji-picker--block'))) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0Y2xpY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZW1vamktcGlja2VyL3NyYy9saWIvQHRoZW1lL2RpcmVjdGl2ZXMvb3V0Y2xpY2suZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQWMsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBS3hGLE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUMzQixrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRDdCLENBQUM7SUFJekMsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFO1lBQ25ILElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs4R0FUVSxpQkFBaUI7a0dBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUg3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2QjtpR0FHVyxhQUFhO3NCQUF0QixNQUFNO2dCQUdQLFVBQVU7c0JBRFQsWUFBWTt1QkFBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW291dENsaWNrXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE91dENsaWNrRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7fVxyXG4gIEBPdXRwdXQoKSBvdXRDbGlja0V2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgdG9nZ2xlT3BlbihldmVudDogYW55KSB7XHJcbiAgICBpZiAoKCF0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkgJiYgIShldmVudC50YXJnZXQuY2xhc3NOYW1lLmluY2x1ZGVzKCdlbW9qaS1waWNrZXItLWJsb2NrJykpKSB7XHJcbiAgICAgIHRoaXMub3V0Q2xpY2tFdmVudC5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==