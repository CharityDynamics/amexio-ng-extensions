import { OnInit } from '@angular/core';
import { DeviceQueryService } from './../../services/device/device.query.service';
export declare class AmexioHomePageWestPanelComponent implements OnInit {
    matchMediaService: DeviceQueryService;
    type: string;
    padding: number;
    constructor(matchMediaService: DeviceQueryService);
    ngOnInit(): void;
    setPadding(paddding: any): void;
}
