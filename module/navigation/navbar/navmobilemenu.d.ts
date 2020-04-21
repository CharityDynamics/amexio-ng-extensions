import { AfterViewInit } from '@angular/core';
export declare class AmexioNavMobileMenuComponent implements AfterViewInit {
    nodes: any[];
    displaykey: string;
    onNavItemClick: any;
    ngAfterViewInit(): void;
    toggleMenu(_event: any, node: any): void;
    onInnerClick(event: any): void;
}
