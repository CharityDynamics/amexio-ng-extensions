import { AfterContentInit, OnInit, QueryList } from '@angular/core';
import { ViewportContentComponent } from '../viewport.content/viewport.content.component';
export declare class ViewportComponent implements AfterContentInit, OnInit {
    queryContent: QueryList<ViewportContentComponent>;
    contentCollection: ViewportContentComponent[];
    overflow: string;
    finalWidth: number;
    scrollable: boolean;
    type: string;
    pageColor: string;
    onWindowScroll(event: any): void;
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
    insertStyleSheetRule(ruleText: any): void;
    getType(element: any): void;
}
