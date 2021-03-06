import { OnInit } from '@angular/core';
import { DeviceQueryService } from './../../services/device/device.query.service';
export declare class AmexioLayoutComponent implements OnInit {
    private matchMediaService;
    private _orientation;
    private _alignment;
    private _padding;
    orientation: string;
    responsiveMode: boolean;
    alignment: string;
    border: boolean;
    fit: boolean;
    orientationDirection: string;
    justifyContent: string;
    borderstyle: string;
    borderboxstyle: string;
    height: string;
    constructor(matchMediaService: DeviceQueryService);
    ngOnInit(): void;
    setLayoutDefination(): void;
    private setorientation;
    private updateOrientation;
    private setAlignment;
    private setBorder;
    private setFit;
    private handleDeviceSettings;
}
