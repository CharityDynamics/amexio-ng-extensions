import { OnInit } from '@angular/core';
import { FormControl, NgModel, Validators } from '@angular/forms';
import { BaseInputEventComponent } from '../../base/base.inputevent.component';
export declare class AmexioPasswordComponent extends BaseInputEventComponent implements OnInit, Validators {
    fieldlabel: string;
    minlength: number;
    maxlength: number;
    allowblank: boolean;
    isValid: boolean;
    regEx: RegExp;
    showToolTip: boolean;
    showandfeedback: boolean;
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
    showpassword: boolean;
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
    model: NgModel;
    name: string;
    show: boolean;
    type: string;
    componentId: any;
    constructor();
    ngOnInit(): void;
    validate(c: FormControl): {
        jsonParseError: {
            valid: boolean;
        };
    };
    onInputPasswordEvent(event: any): void;
    toggleShow(): void;
}
