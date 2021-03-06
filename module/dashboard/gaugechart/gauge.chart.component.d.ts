import { AfterContentInit, OnInit, QueryList } from '@angular/core';
import { DashboardLoaderService } from '../chart.loader.service';
import { DashBoardTitleComponent } from '../dashboardtitle/dashboard.title.component';
export declare class GaugeChartComponent implements AfterContentInit, OnInit {
    private loader;
    private options;
    private gaugeData;
    private chart;
    id: any;
    hasLoaded: boolean;
    elementId: string;
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
    description : Local data for gauge chart
    */
    data: any;
    redcolorfrom: number;
    redcolorto: number;
    yellowcolorfrom: number;
    yellowcolorto: number;
    scalevalue: number;
    chartTitleComp: QueryList<DashBoardTitleComponent>;
    chartTitleArray: DashBoardTitleComponent[];
    chartTitleComponent: DashBoardTitleComponent;
    private gaugedashboard;
    constructor(loader: DashboardLoaderService);
    drawChart(): void;
    ngAfterContentInit(): void;
    ngOnInit(): void;
    onResize(event: any): void;
}
