import { EventEmitter, OnInit } from '@angular/core';
export declare class AmexioGridItemComponent implements OnInit {
    hostname: any;
    private _name;
    name: string;
    title: string;
    hcEnabled: boolean;
    hcDirection: string;
    vcEnabled: boolean;
    vcDirection: string;
    onToggle: EventEmitter<any>;
    mincontent: boolean;
    collapsibleTitle: string;
    fit: boolean;
    hcPosition: string;
    vcPosition: string;
    cPosition: string;
    iconDegree: string;
    iconDegreeData: string[];
    showContent: boolean;
    containerDirection: string;
    constructor();
    ngOnInit(): void;
    insertStyleSheetRule(ruleText: any): void;
    setClassDefinition(): void;
    toggle(): void;
}
