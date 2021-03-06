import { ChangeDetectorRef, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CommonDataService } from '../../services/data/common.data.service';
import { ValueAccessorBaseComponent } from './../../base/value-accessor';
export declare class AmexioRadioGroupComponent extends ValueAccessorBaseComponent<string> implements OnInit, Validators {
    amxHttp: CommonDataService;
    private cd;
    allowblank: boolean;
    name: string;
    fieldlabel: string;
    datareader: string;
    httpmethod: string;
    httpurl: string;
    displayfield: string;
    valuefield: string;
    defaultSelectedValue: string;
    horizontal: boolean;
    data: any[];
    disabled: boolean;
    hasLabel: boolean;
    onSelection: any;
    onSelect: any;
    isValid: boolean;
    isComponentValid: any;
    viewData: any;
    componentId: any;
    listCopy: any;
    tabFocus: boolean;
    constructor(amxHttp: CommonDataService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    checkDefaultValidation(viewData: any): void;
    chkValidation(viewData: any): void;
    checkSelectedFlag(viewData: any): void;
    getResponseData(httpResponse: any): any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    value: any;
    onBlur(): void;
    onFocus(): void;
    onClick(row: any, event: any): void;
    checkValidity(): boolean;
    validate(c: FormControl): {
        jsonParseError: {
            valid: boolean;
        };
    };
}
