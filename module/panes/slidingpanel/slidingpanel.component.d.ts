import { AfterContentInit, OnInit, QueryList } from '@angular/core';
import { PanelItemComponent } from './panelitem.component';
export declare class SlidingPanelComponent implements OnInit, AfterContentInit {
    header: string;
    queryTabs: QueryList<PanelItemComponent>;
    onPanelItemClick: any;
    ChildPanelSlidersCollection: PanelItemComponent[];
    title: string;
    panelItemName: string;
    panelItemIcon: string;
    panelItemImage: string;
    panelItemImgProp: any;
    showbackarrow: boolean;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    restorePanelState(): void;
    onPaneClick(titleobj: any): void;
}
