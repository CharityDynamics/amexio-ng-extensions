import { OnDestroy, OnInit, Renderer2 } from '@angular/core';
export declare class OverlayContainerComponent implements OnInit, OnDestroy {
    private _renderer;
    show: boolean;
    right: number;
    left: number;
    top: number;
    bottom: number;
    iconPosition: any;
    marginLeft: number;
    height: string;
    eventRef: any;
    arrowClass: string;
    closable: boolean;
    position: string;
    width: string;
    bodyHeight: number;
    closeonescape: boolean;
    renderPositionClass: any;
    globalListenFunc: () => void;
    constructor(_renderer: Renderer2);
    ngOnInit(): void;
    onClose(): void;
    resetData(): void;
    toggle(event: any): void;
    setRenderPositionClass(): any;
    onAnimationStart(event: any): void;
    findOverlayPosition(element: any, target: any): any;
    getWindowScrollTop(): number;
    getWindowScrollLeft(): number;
    getViewportDetails(): any;
    ngOnDestroy(): void;
}
