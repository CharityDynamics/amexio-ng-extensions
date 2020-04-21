import { AfterContentInit, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { AmexioFooterComponent } from '../action/pane.action.footer';
import { LifeCycleBaseComponent } from '../../base/lifecycle.base.component';
export declare class AmexiodialoguePaneComponent extends LifeCycleBaseComponent implements AfterContentInit, OnChanges, OnInit, OnDestroy {
    private renderer;
    closeonescape: boolean;
    buttontype: string;
    buttonsize: string;
    footeralign: string;
    contentalign: string;
    showdialogue: boolean;
    show: boolean;
    showChange: EventEmitter<any>;
    closable: boolean;
    title: string;
    message: string;
    custom: boolean;
    type: 'confirm' | 'alert';
    primaryactionlabel: string;
    secondaryactionlabel: string;
    messagetype: string;
    materialDesign: boolean;
    actionStatus: EventEmitter<any>;
    onSuccess: EventEmitter<any>;
    onCancel: EventEmitter<any>;
    close: EventEmitter<any>;
    amexioFooter: QueryList<AmexioFooterComponent>;
    themeCss: any;
    amexioComponentId: string;
    transitionOptions: string;
    value: number;
    defaultStyle: string;
    componentId: string;
    globalListenFunc: () => void;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    escapeMethod(): void;
    onCloseClick(): void;
    getStatus(v: any): void;
    getDefaultStyle(): "transparent" | "defualt";
    getStyle(): string;
    ngOnDestroy(): void;
    createCompId(inputType: any, name: any): string;
    setColorPalette(themeClass: any): void;
}
