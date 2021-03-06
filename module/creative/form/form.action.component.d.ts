import { AfterContentInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
export declare class AmexioFormActionCEComponent implements AfterContentInit {
    formBuilder: FormBuilder;
    errorMsgArray: any[];
    isFormValid: boolean;
    showDialogue: boolean;
    checkForm: boolean;
    form: NgForm;
    formFlag: boolean;
    enableaction: boolean;
    icon: string;
    constructor(formBuilder: FormBuilder);
    ngAfterContentInit(): void;
    showErrors(event: any): void;
    closeDialogue(): void;
    addErrorMsg(): void;
    getValidationForm(form: any, formFlag: boolean): void;
}
