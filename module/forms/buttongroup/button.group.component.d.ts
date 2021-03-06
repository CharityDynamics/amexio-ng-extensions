import { AfterContentInit, OnChanges, QueryList, SimpleChanges } from '@angular/core';
import { AmexioButtonComponent } from '../buttons/button.component';
export declare class AmexioButtonGroupComponent implements AfterContentInit, OnChanges {
    private componentLoaded;
    size: string;
    disabled: string;
    _buttonGroupLocalData: any;
    buttonGroupLocalData: any;
    badge: number;
    buttonGroupPreviewData: any;
    previousData: any;
    ispressed: boolean;
    getButton: any;
    btns: QueryList<AmexioButtonComponent>;
    buttons: AmexioButtonComponent[];
    constructor();
    updateComponent(): void;
    ngOnChanges(change: SimpleChanges): void;
    buttonGroupClick(clickEvent: any, btnObj: any): void;
    ngAfterContentInit(): void;
    addBadgeCssClass(): void;
    badgeClass(button: any): string;
    setButtonSizes(btnArray: any): void;
    badgeMoreClass(button: any): string;
    updateButtonSizes(size: any): void;
}
