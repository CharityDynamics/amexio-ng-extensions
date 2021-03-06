import { ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { EventBaseComponent } from '../../base/event.base.component';
export declare class SpeechBubbleComponent extends EventBaseComponent<any> implements OnInit {
    element: ElementRef;
    renderer: Renderer2;
    arrowpress: boolean;
    contextmenu: any[];
    contextStyle: any;
    bubblestyle: {};
    today: Date;
    jstoday: string;
    dateTime: any;
    globalspeechListenFunc: () => void;
    width: string;
    position: string;
    data: any;
    enabletime: boolean;
    onClick: any;
    todaydate: any;
    constructor(element: ElementRef, renderer: Renderer2, _cd: ChangeDetectorRef);
    ngOnInit(): void;
    onarrowClick(event: any): void;
    onBubbleNodeClick(itemConfig: any): void;
}
