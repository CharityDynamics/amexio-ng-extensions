import { AfterContentInit, OnInit, QueryList } from '@angular/core';
import { AmexioNavBarComponent } from './../../navigation/navbar/navbar.component';
import { AmexioSideNavComponent } from './../../navigation/sidenav/sidenav.component';
import { DeviceQueryService } from './../../services/device/device.query.service';
import { AmexioHomePageNorthPanelComponent } from './homepage.northpanel.component';
import { AmexioHomePageWestPanelComponent } from './homepage.westpanel.component';
export declare class AmexioHomePageComponent implements OnInit, AfterContentInit {
    matchMediaService: DeviceQueryService;
    type: string;
    amexoHomePageNorthpanel: AmexioHomePageNorthPanelComponent;
    sideNavList: QueryList<AmexioSideNavComponent>;
    sideNavComponents: AmexioSideNavComponent[];
    amexioHomePageWestPanelComponent: AmexioHomePageWestPanelComponent;
    amexioNavBarComponent: AmexioNavBarComponent;
    isDisableWestPanel: boolean;
    isPhone: boolean;
    westPanelWidth: string;
    northPanelHeight: number;
    constructor(matchMediaService: DeviceQueryService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    setTimeoutMethodSeoerate(): void;
    resize(event: any): void;
    showHideWestPanel(): void;
    northPanelClick(isExpand: any): void;
}
