import { AfterContentInit, AfterViewInit, ElementRef, EventEmitter, OnInit } from '@angular/core';
export declare type PaneType = 'left' | 'right';
export declare class PanelItemComponent implements OnInit, AfterContentInit, AfterViewInit {
    activePane: PaneType;
    icon: string;
    title: string;
    imgheight: string;
    imgwidth: string;
    imgcclass: any;
    imgpath: any;
    tref: ElementRef;
    childPanelClicked: EventEmitter<any>;
    isSwipeTriggered: boolean;
    hasContent: boolean;
    showrow: boolean;
    showngcontent: boolean;
    clicked: boolean;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    onPanelClick(event: any): void;
}
