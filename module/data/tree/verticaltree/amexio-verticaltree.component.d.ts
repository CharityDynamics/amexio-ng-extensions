import { AfterViewInit, OnInit, TemplateRef } from '@angular/core';
import { AmexioInnerVerticalNodeComponent } from '../verticaltree/amexio-innerverticalnode.component';
export declare class AmexioVerticalTreeComponent implements AfterViewInit, OnInit {
    data: any;
    onNodeClick: any;
    onDropClick: any;
    treetemplates: any;
    retevent: any;
    parentTmp: TemplateRef<any>;
    innernodeRef: AmexioInnerVerticalNodeComponent;
    constructor();
    ngOnInit(): void;
    nodeclick(event: any): void;
    chkdEvent(event: any): void;
    chknodeclickevent(parentevent: any, event: any): void;
    ngAfterViewInit(): void;
    dragOver(event: DragEvent): void;
    dropTable(event: any): void;
    chkEvent(event: any): void;
}
