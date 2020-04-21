/**
 * Created by Kedar on 6-2-2020.
 */
import { AfterViewInit, OnInit, TemplateRef } from '@angular/core';
export declare class HorizontalTreeViewNodeComponent implements AfterViewInit, OnInit {
    templates: any;
    data: any[];
    onNodeClick: any;
    treetemplates: any;
    parentTmp: TemplateRef<any>;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onClick(node: any): void;
    onInnerClick(node: any): void;
    onArrowUp(data: any, node: any, index: any): void;
    setFocus(focuselement: any): void;
    focusToInnerLastItem(node: any): void;
    splitID(id: any): any;
    onArrowDown(event: any, data: any, node: any, index: any): void;
    focusTONextParent(node: any): void;
    onEnterClick(node: any): void;
}
