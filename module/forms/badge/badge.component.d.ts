import { OnInit } from '@angular/core';
export declare class AmexioBadgeComponent implements OnInit {
    absolute: boolean;
    background: string;
    color: string;
    top: string;
    left: string;
    right: string;
    bottom: string;
    orientation: string;
    height: string;
    width: string;
    cClass: string;
    roundedgeclass: string;
    constructor();
    ngOnInit(): void;
    setRoundEdge(type: any): void;
}
