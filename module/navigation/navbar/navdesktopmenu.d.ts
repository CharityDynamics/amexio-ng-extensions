import { AfterViewInit, ElementRef } from '@angular/core';
export declare class AmexioNavDesktopMenuComponent implements AfterViewInit {
    nodes: any[];
    displaykey: string;
    position: string;
    marginTop: any;
    menus: ElementRef;
    divRef: ElementRef;
    onNavItemClick: any;
    ngAfterViewInit(): void;
    onMouseOver(event: any, node: any): void;
    onMouseLeave(event: any, node: any): void;
    onClick(_event: any, node: any): void;
    onInnerClick(event: any): void;
    onScroll(): void;
}
