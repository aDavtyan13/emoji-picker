import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IDataInterface } from '../@core/interfaces/data.interface';
import * as i0 from "@angular/core";
export declare class EmojiPickerService {
    private http;
    constructor(http: HttpClient);
    getEmojis(): Observable<IDataInterface>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmojiPickerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EmojiPickerService>;
}
