import { EventEmitter } from '@angular/core';
import { PropertyGridModel } from '../../../models/propertyGridModel';
export declare class PropertyGridComponent {
    data: PropertyGridModel[];
    hasBorder: boolean;
    height: any;
    hasColon: boolean;
    enableKeyBold: boolean;
    enableValueClick: boolean;
    onValueClick: EventEmitter<any>;
    constructor();
    onClick(event: PropertyGridModel): void;
}
