import { AfterContentInit, QueryList } from '@angular/core';
import { StackableItemComponent } from '../StackablePanel-Item/stackablePanel-item.component';
export declare class StackablePanelComponent implements AfterContentInit {
    totalCount: number;
    text: string;
    expand: boolean;
    anyExpand: boolean;
    panelName: string;
    showbtn: boolean;
    show: boolean;
    groups: QueryList<StackableItemComponent>;
    ngAfterContentInit(): void;
    openGroup(group: any): void;
    showAll(): void;
}
