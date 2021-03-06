import { ChangeDetectorRef, OnInit, TemplateRef } from '@angular/core';
import { LifeCycleBaseComponent } from '../../base/lifecycle.base.component';
export declare enum KEY_CODE_notify {
    esc = 27
}
export declare class AmexioNotificationComponent extends LifeCycleBaseComponent implements OnInit {
    private ref;
    messageData: any[];
    icon: any;
    closable: boolean;
    verticalposition: string;
    horizontalposition: string;
    autodismissmsg: boolean;
    autodismissmsginterval: number;
    closeonescape: boolean;
    backgroundColor: string;
    foregroundColor: string;
    amexioColor: string;
    type: string;
    data: any[];
    positionclass: string;
    customClass: boolean;
    componentID: any;
    private notificationVertialCss;
    private notificationHorizontalCss;
    notificationTemplate: TemplateRef<any>;
    keyEvent(event: KeyboardEvent): void;
    constructor(ref: ChangeDetectorRef);
    ngOnInit(): void;
    closeNotification(msg: any): void;
}
