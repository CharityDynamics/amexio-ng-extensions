import { AfterViewInit, OnInit, TemplateRef } from '@angular/core';
export declare class AmexioInnerVerticalNodeComponent implements OnInit, AfterViewInit {
    onDropClick: any;
    treetemplates: any;
    data: any;
    firstChild: boolean;
    lastChild: boolean;
    root: boolean;
    onNodeClick: any;
    onDragOver: any;
    templates: any;
    parentTmp: TemplateRef<any>;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onClick(event: any): void;
    dragOver(event: DragEvent): void;
    dropTable(event: any): void;
    dropInnerTable(event: any): void;
    clickTable(event: any): void;
    clickInnerTable(event: any): void;
    chknodeclickevent(event: any): void;
}
