import { AfterContentInit, OnInit, QueryList } from '@angular/core';
import { DeviceQueryService } from '../../services/device/device.query.service';
import { AmexiotimelineeventComponent } from './amexiotimelineevent.component';
import { AmexioTimeLineModel } from './amexiotimelinevent.model';
import { LifeCycleBaseComponent } from '../../base/lifecycle.base.component';
export declare class AmexiotimelineComponent extends LifeCycleBaseComponent implements OnInit, AfterContentInit {
    matchMediaService: DeviceQueryService;
    querylist: QueryList<AmexiotimelineeventComponent>;
    contentalignment: string;
    alignment: string;
    timelineevents: AmexiotimelineeventComponent[];
    timelineModel: AmexioTimeLineModel;
    constructor(matchMediaService: DeviceQueryService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    private initContentAlignment;
    private mobileOrTabletMode;
    private desktopMode;
}
