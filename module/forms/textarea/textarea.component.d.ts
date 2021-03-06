import { OnInit } from '@angular/core';
import { FormControl, NgModel, Validators } from '@angular/forms';
import { ValueAccessorBaseComponent } from '../../base/value-accessor';
export declare class AmexioTextAreaComponent extends ValueAccessorBaseComponent<string> implements OnInit, Validators {
    fieldlabel: string;
    rows: number;
    columns: number;
    allowblank: boolean;
    helpInfoMsg: string;
    regEx: RegExp;
    showToolTip: boolean;
    _errormsg: string;
    onBlur: any;
    input: any;
    focus: any;
    change: any;
    minerrormsg: string;
    maxerrormsg: string;
    errormsg: string;
    placeholder: string;
    disabled: boolean;
    iconfeedback: boolean;
    fontstyle: string;
    fontfamily: string;
    fontsize: string;
    haslabel: boolean;
    _pattern: string;
    isValid: boolean;
    /*
    Properties
    name : pattern
    datatype : string
    version : 4.0 onwards
    default : none
    description : Apply Reg-ex to the field
    */
    pattern: string;
    enablepopover: boolean;
    name: string;
    readonly: boolean;
    model: NgModel;
    componentId: any;
    constructor();
    ngOnInit(): void;
    onBlurEvent(): void;
    onFocusEvent(inputEvent: any): void;
    onInputEvent(inputEvent: any): void;
    onChangeEv(inputEvent: any): void;
    eventPropagation(event: any): void;
    isFieldValid(): boolean;
    validate(c: FormControl): {
        jsonParseError: {
            valid: boolean;
        };
    };
}
