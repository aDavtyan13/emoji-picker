import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmojiPickerComponent } from './emoji-picker.component';
import { OutClickDirective } from '../@theme/directives/outclick.directive';
import { AutofocusDirective } from '../@theme/directives/autofocus.directive';
import * as i0 from "@angular/core";
export class EmojiPickerModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vtb2ppLXBpY2tlci9zcmMvbGliL2Vtb2ppLXBpY2tlci9lbW9qaS1waWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQzs7QUFpQjVFLE1BQU0sT0FBTyxpQkFBaUI7OzhHQUFqQixpQkFBaUI7K0dBQWpCLGlCQUFpQixpQkFiMUIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixvQkFBb0IsYUFHcEIsV0FBVztRQUNYLFlBQVk7UUFDWixnQkFBZ0IsYUFHaEIsb0JBQW9COytHQUdYLGlCQUFpQixZQVRuQjtZQUNQLFdBQVc7WUFDWCxZQUFZO1lBQ1osZ0JBQWdCO1NBQ2pCOzJGQUtVLGlCQUFpQjtrQkFmN0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7cUJBQ3JCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQge0Vtb2ppUGlja2VyQ29tcG9uZW50fSBmcm9tICcuL2Vtb2ppLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHtPdXRDbGlja0RpcmVjdGl2ZX0gZnJvbSAnLi4vQHRoZW1lL2RpcmVjdGl2ZXMvb3V0Y2xpY2suZGlyZWN0aXZlJztcbmltcG9ydCB7QXV0b2ZvY3VzRGlyZWN0aXZlfSBmcm9tICcuLi9AdGhlbWUvZGlyZWN0aXZlcy9hdXRvZm9jdXMuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgT3V0Q2xpY2tEaXJlY3RpdmUsXG4gICAgQXV0b2ZvY3VzRGlyZWN0aXZlLFxuICAgIEVtb2ppUGlja2VyQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRW1vamlQaWNrZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFbW9qaVBpY2tlck1vZHVsZSB7XG59XG4iXX0=