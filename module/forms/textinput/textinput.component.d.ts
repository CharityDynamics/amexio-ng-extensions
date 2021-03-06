import { OnInit } from '@angular/core';
import { FormControl, NgModel, Validators } from '@angular/forms';
import { BaseInputEventComponent } from '../../base/base.inputevent.component';
export declare class AmexioTextInputComponent extends BaseInputEventComponent implements OnInit, Validators {
    fieldlabel: string;
    minlength: number;
    maxlength: number;
    allowblank: boolean;
    regEx: RegExp;
    minerrormsg: string;
    maxerrormsg: string;
    errormsg: string;
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    iconfeedback: boolean;
    fontstyle: string;
    fontfamily: string;
    fontsize: string;
    haslabel: boolean;
    _pattern: string;
    /*
    Properties
    name : pattern
    datatype : string
    version : 4.0 onwards
    default :
    description : Apply Reg-ex to the field
    */
    pattern: string;
    enablepopover: boolean;
    isValid: boolean;
    model: NgModel;
    name: string;
    onBlur: any;
    input: any;
    focus: any;
    change: any;
    componentId: any;
    constructor();
    ngOnInit(): void;
    validate(c: FormControl): {
        jsonParseError: {
            valid: boolean;
        };
    };
    onInputTextEvent(event: any): void;
}
