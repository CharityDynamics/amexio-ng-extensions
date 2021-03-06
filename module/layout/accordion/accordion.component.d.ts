import { AfterContentInit, AfterViewInit, OnDestroy, OnInit, QueryList } from '@angular/core';
import { LifeCycleBaseComponent } from '../../base/lifecycle.base.component';
import { AmexioAccordionTabComponent } from './accordion.pane';
export declare class AmexioAccordionComponent extends LifeCycleBaseComponent implements AfterContentInit, AfterViewInit, OnInit, OnDestroy {
    expandAll: boolean;
    isTransparent: boolean;
    angleIcon: boolean;
    bgColor: string;
    color: string;
    multiopen: boolean;
    queryTabs: QueryList<AmexioAccordionTabComponent>;
    accordionCollections: AmexioAccordionTabComponent[];
    flag: boolean;
    prevaccindex: number;
    accindex: number;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    activateAccordionPane(nodeEvent: any): void;
    onkeyDown(): void;
    onkeyUp(): void;
    private onPreAccIndex;
    private setAccoordionActive;
    ngOnDestroy(): void;
}
