import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { AmexioFormValidator } from '../forms/form-validator/amexio.form.validator.component';
export declare class ListBaseDatepickerComponent<T> extends AmexioFormValidator {
    renderer: Renderer2;
    element: ElementRef;
    private cd;
    poscls: any;
    self: boolean;
    itemClick: boolean;
    dropdownstyle: any;
    documentClickListener: any;
    listen: boolean;
    yearList1: any[];
    yearList2: any[];
    monthList1: any[];
    monthList2: any[];
    currrentDate: any;
    curYear: any;
    monthNo: any;
    yearNo: any;
    constructor(renderer: Renderer2, element: ElementRef, cd: ChangeDetectorRef);
    focus(event: any): void;
    blur(event: any): void;
    itemClicked(): void;
    bindDocumentClickListener(): void;
    handleDocumentListener(event: any): void;
    clearClicks(): void;
    unbindDocumentClickListener(): void;
    hide(): void;
    commonDeclaration(): void;
    getDropdownMonth(month: any): void;
    setPosition(): void;
    elementFlagMethod(element: any): void;
    chkMonth(element: any, month: any): void;
    getDropdownYear(year: any): void;
    private yearFlagNegate;
    yearFlag(element: any, year: any): void;
    getCryptoId(): string;
}
