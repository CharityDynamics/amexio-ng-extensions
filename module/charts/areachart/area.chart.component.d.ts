import { AfterContentInit, ElementRef, OnInit, QueryList } from '@angular/core';
import { ChartAreaComponent } from '../chartarea/chart.area.component';
import { ChartLegendComponent } from '../chartlegend/chart.legend.component';
import { ChartTitleComponent } from '../charttitle/chart.title.component';
import { ChartLoaderService } from '../chart.loader.service';
export declare class AreaChartComponent implements AfterContentInit, OnInit {
    private loader;
    private options;
    private areaData;
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
    default :
    description : Local data for AreaChart
    */
    data: any;
    backgroundcolor: string;
    chartLegendComp: QueryList<ChartLegendComponent>;
    chartTitleComp: QueryList<ChartTitleComponent>;
    chartAreaComp: QueryList<ChartAreaComponent>;
    chartAreaArray: ChartAreaComponent[];
    chartAreaComponent: ChartAreaComponent;
    chartLegendArray: ChartLegendComponent[];
    chartLengendComponent: ChartLegendComponent;
    chartTitleArray: ChartTitleComponent[];
    chartTitleComponent: ChartTitleComponent;
    areachart: ElementRef;
    constructor(loader: ChartLoaderService);
    drawChart(): void;
    createTitleTextStyle(): any;
    createChartLegend(): any;
    createChartArea(): any;
    click(e: any): void;
    ngAfterContentInit(): void;
    ngOnInit(): void;
    onResize(event: any): void;
}
