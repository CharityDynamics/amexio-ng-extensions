import { ElementRef, OnChanges, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/index';
export declare class AmexioHeaderComponent implements OnInit, OnChanges {
    document: any;
    readonly c1: string;
    readonly c2: string;
    jstyfy: string;
    background: string;
    content: ElementRef;
    color: string;
    padding: string;
    minimizeWindow: any;
    closeDataEmit: any;
    maximizeWindow: any;
    maximizeWindow1: any;
    minimizeWindow1: any;
    minimizeIcon: any;
    minimize: boolean;
    closeable: boolean;
    maximize: boolean;
    isFullWindow: boolean;
    fullScreenFlag: boolean;
    fullscreenMaxCard: boolean;
    closeableBehaiour: BehaviorSubject<boolean>;
    maximizeBehaiour: BehaviorSubject<any>;
    aComponent: string;
    aComponent1: string;
    textName: any;
    elem: any;
    constructor(document: any);
    ngOnInit(): void;
    ngOnChanges(): any;
    setMaximizeData(maximize: boolean, isFullWindow: boolean, event: any): void;
    setMaterialDesignStatus(materialDesign: boolean): void;
    sizeChange(event: any): void;
    onCloseClick(): void;
    onMinimizeClick(): void;
    maxScreenChangeCard(event: any): void;
    minScreenChangeCard(event: any): void;
}
