import { OnInit } from '@angular/core';
import { CommonDataService } from '../../services/data/common.data.service';
import { DeviceQueryService } from '../../services/device/device.query.service';
import { LifeCycleBaseComponent } from '../../base/lifecycle.base.component';
export declare class AmexioMenuBarComponent extends LifeCycleBaseComponent implements OnInit {
    matchMediaService: DeviceQueryService;
    dataService: CommonDataService;
    data: any[];
    label: any;
    httpurl: string;
    httpmethod: string;
    datareader: string;
    nodeClick: any;
    xposition: boolean;
    responseData: any;
    expand: boolean;
    currentnode: any;
    constructor(matchMediaService: DeviceQueryService, dataService: CommonDataService);
    ngOnInit(): void;
    onClick(node: any): void;
    onSubInnerNodeClick(subinnernode: any, mainnode: any): void;
    onInnerNodeClick(subnode: any, mainnode: any): void;
    onMenubarKeyup(event: any, flag: any, rowindex: any, node: any, data: any): void;
    NavigateMenubarLeft(event: any, flag: any, rowindex: any, node: any, data: any): void;
    NavigateMenubarRight(event: any, flag: any, rowindex: any, node: any, data: any): void;
    navigateChild(event: any, flag: any, rowindex: any, node: any, data: any, nodedata: any): void;
    navigateChildMenuitemLeft(event: any, rowindex: any, node: any, data: any): void;
    navigateChildMenuitemRight(event: any, rowindex: any, node: any, data: any): void;
    onnavigateChildEnterClick(event: any, rowindex: any, node: any, data: any, nodedata: any): void;
    onEnterClick(rowindex: any, node: any): void;
    updownInnerChildNavigation(event: any, subinnerindex: any, data: any, subinnernode: any, mainnode: any): void;
    onUpInnerChildNavigate(event: any, subinnerindex: any, data: any): void;
    onDownInnerChildNavigate(event: any, subinnerindex: any, data: any): void;
    onInnerChildEnterClick(subinnernode: any, mainnode: any): void;
    generateIndex(data: any): void;
    generateInnerIndex(innerindex: any, innerelement: any): void;
    generateSunInnerIndex(subinnerindex: any, subinnerelement: any): void;
    setData(httpResponse: any): void;
    onMouseOver(event: any, node: any): void;
}
