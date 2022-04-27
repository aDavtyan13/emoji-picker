import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class EmojiPickerService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktcGlja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lbW9qaS1waWNrZXIvc3JjL2xpYi9lbW9qaS1waWNrZXIvZW1vamktcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBUXpDLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUNwQyxDQUFDO0lBRU0sU0FBUztRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWlCLDJCQUEyQixDQUFDLENBQUM7SUFDcEUsQ0FBQzs7K0dBTlUsa0JBQWtCO21IQUFsQixrQkFBa0IsY0FGakIsTUFBTTsyRkFFUCxrQkFBa0I7a0JBSDlCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHtJRGF0YUludGVyZmFjZX0gZnJvbSAnLi4vQGNvcmUvaW50ZXJmYWNlcy9kYXRhLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEVtb2ppUGlja2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICB9XG5cbiAgcHVibGljIGdldEVtb2ppcygpOiBPYnNlcnZhYmxlPElEYXRhSW50ZXJmYWNlPntcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJRGF0YUludGVyZmFjZT4oJy4vYXNzZXRzL2RhdGEvZW1vamlzLmpzb24nKTtcbiAgfVxufVxuIl19