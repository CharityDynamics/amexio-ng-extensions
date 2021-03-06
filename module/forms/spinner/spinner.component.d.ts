/**
 * Created by kedar on 17/09/18.
 */
import { ElementRef, OnChanges, OnInit, Renderer2 } from '@angular/core';
export declare class AmexioSpinnerComponent implements OnInit, OnChanges {
    private renderer;
    private _type;
    private _color;
    type: any;
    color: string;
    show: boolean;
    verticalposition: string;
    horizontalposition: string;
    size: string;
    relative: boolean;
    positionSpinnerClass: string;
    private spinnerVertialCss;
    private spinnerHorizontalCss;
    private spinnerRelativeCss;
    element: ElementRef;
    alpha: string;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    ngOnChanges(): void;
    positionChangeClass(): void;
    private assignColor;
    insertStyleSheetRule(ruleText: any): void;
}
