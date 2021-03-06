import { AfterContentInit, EventEmitter, OnInit, QueryList } from '@angular/core';
import { MapTitleComponent } from '../maptitle/map.title.component';
import { MapLoaderService } from '../map.loader.service';
export declare class TreeMapComponent implements AfterContentInit, OnInit {
    private loader;
    private options;
    private treemapData;
    private chart;
    hasLoaded: boolean;
    id: any;
    width: string;
    height: string;
    showChart: boolean;
    _data: any;
    /*
    Properties
    name : data
    datatype : any
    version : 4.0 onwards
    default : none
    description : Local data for TreeMap.
    */
    data: any;
    mincolor: string;
    midcolor: string;
    maxcolor: string;
    showscale: boolean;
    maxpostdepth: number;
    onClick: EventEmitter<any>;
    maptleComp: QueryList<MapTitleComponent>;
    mapTitleArray: MapTitleComponent[];
    mapTitleComponent: MapTitleComponent;
    private treemapmap;
    constructor(loader: MapLoaderService);
    drawChart(): void;
    initializeOptions(): void;
    mapTitleTextStyle(): {
        color: string;
        fontName: string;
        bold: true;
        italic: true;
    };
    click(e: any): void;
    ngAfterContentInit(): void;
    ngOnInit(): void;
    onResize(event: any): void;
}
