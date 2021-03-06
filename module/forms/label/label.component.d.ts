import { OnInit } from '@angular/core';
export declare class AmexioLabelComponent implements OnInit {
    badge: number;
    styleClass: string;
    fontColor: string;
    enableclick: boolean;
    wordwrap: boolean;
    blackLabel: boolean;
    onClick: any;
    tempStyleArray: any;
    constructor();
    ngOnInit(): void;
    onLabel(event: any): void;
}
