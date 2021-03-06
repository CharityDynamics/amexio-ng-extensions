import { OnInit } from '@angular/core';
import { DeviceQueryService } from '../../services/device/device.query.service';
import { IconLoaderService } from './../../services/icon/icon.service';
export declare class SideNavNodeComponent implements OnInit {
    matchMediaService: DeviceQueryService;
    private iconService;
    nodedata: any;
    currentdivref: any;
    badge: string;
    icon: string;
    label: string;
    enableborder: boolean;
    active: boolean;
    collapsable: boolean;
    node: any[];
    enabledrag: boolean;
    nodeClick: any;
    onDrag: any;
    nodeEmitToSideNav: any;
    displaykey: string;
    childarraykey: string;
    expand: boolean;
    iconcolor: string;
    isShowOnlyIcon: boolean;
    isMobile: boolean;
    isDefaultUserIcon: boolean;
    constructor(matchMediaService: DeviceQueryService, iconService: IconLoaderService);
    ngOnInit(): void;
    onClick(node: any): void;
    onNodeClick(node: any): void;
    dragStartEvent(event: any): void;
    emittednodedata(allNodeData: any): void;
    onenterClick(divref: any, nodedata: any): void;
    setShowOnlyIconFlag(isIcon: any): void;
}
