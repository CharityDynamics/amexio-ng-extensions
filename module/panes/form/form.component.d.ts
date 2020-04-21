import { AfterContentChecked, AfterContentInit, AfterViewInit, ElementRef, OnDestroy, OnInit, QueryList } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { LifeCycleBaseComponent } from '../../base/lifecycle.base.component';
import { AmexioButtonComponent } from './../../forms/buttons/button.component';
import { AmexioFormActionComponent } from './form.action.component';
import { AmexioFormBodyComponent } from './form.body.component';
import { AmexioFormGroupDirective } from './form.group.directive';
import { AmexioFormHeaderComponent } from './form.header.component';
export declare class AmexioFormComponent extends LifeCycleBaseComponent implements OnDestroy, OnInit, AfterViewInit, AfterContentInit, AfterContentChecked {
    formBuilder: FormBuilder;
    headeralign: string;
    footeralign: string;
    fname: string;
    header: string;
    showError: boolean;
    height: any;
    minHeight: any;
    bodyheight: any;
    icon: any;
    formHeader: ElementRef;
    formFooter: ElementRef;
    showErrorMsg: any;
    componentError: any[];
    headerPadding: string;
    bodyPadding: string;
    footerPadding: string;
    errorMsgArray: any[];
    isFormValid: boolean;
    showDialogue: boolean;
    checkForm: boolean;
    clearTimeout: any;
    amexioHeader: QueryList<AmexioFormHeaderComponent>;
    headerComponentList: AmexioFormHeaderComponent[];
    amexioBody: QueryList<AmexioFormBodyComponent>;
    bodyComponentList: AmexioFormBodyComponent[];
    amexioFooter: QueryList<AmexioFormActionComponent>;
    footerComponentList: AmexioFormActionComponent[];
    btns: QueryList<AmexioButtonComponent>;
    buttons: AmexioButtonComponent[];
    form: NgForm;
    models: QueryList<NgModel>;
    fb: QueryList<AmexioFormGroupDirective>;
    constructor(formBuilder: FormBuilder);
    ngAfterContentInit(): void;
    onResize(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    isFieldPresentInParentAndChildBoth(innerModelArray: any[], name: string): boolean;
    closeDialogue(): void;
    addErrorMsg(): void;
    showErrors(event: any): void;
    validateForm(): void;
    disableButton(flag: boolean): void;
    ngAfterContentChecked(): void;
    findformStyleClass(): "flex-end" | "flex-start" | "flex-center";
    ngOnDestroy(): void;
}
