import { AfterContentInit, OnInit, QueryList } from '@angular/core';
import { ChartAreaComponent } from '../chartarea/chart.area.component';
import { ChartTitleComponent } from '../charttitle/chart.title.component';
import { HorizontalAxisComponent } from '../horizontalaxis/chart.horizontalaxis.component';
import { VerticalAxisComponent } from '../verticalaxis/chart.verticalaxis.component';
import { ChartLoaderService } from '../chart.loader.service';
export declare class CandlestickChartComponent implements AfterContentInit, OnInit {
    private loader;
    private options;
    private candlestickData;
    private chart;
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
    description : Local data for AreaChart
    */
    data: any;
    backgroundcolor: string;
    hasLoaded: boolean;
    chartAreaComp: QueryList<ChartAreaComponent>;
    chartTitleComp: QueryList<ChartTitleComponent>;
    horizontalComp: QueryList<HorizontalAxisComponent>;
    horizontalArray: HorizontalAxisComponent[];
    horizontalComponent: HorizontalAxisComponent;
    verticalComp: QueryList<VerticalAxisComponent>;
    verticalArray: HorizontalAxisComponent[];
    verticalComponent: HorizontalAxisComponent;
    chartAreaArray: ChartAreaComponent[];
    chartAreaComponent: ChartAreaComponent;
    chartTitleArray: ChartTitleComponent[];
    chartTitleComponent: ChartTitleComponent;
    private candlestick;
    constructor(loader: ChartLoaderService);
    drawChart(): void;
    chartTileTextStyle(): {
        color: string;
        fontName: string;
        fontsize: number;
        bold: true;
        italic: true;
    };
    chartLegendStyle(): {
        backgroundcolor: string;
        left: number;
        top: number;
        height: number;
        width: number;
    };
    chartVerticalStyle(): {
        title: string;
        titleTextStyle: {
            color: string;
        };
    };
    chartHorizontalStyle(): {
        title: string;
        titleTextStyle: {
            color: string;
        };
    };
    click(e: any): void;
    ngAfterContentInit(): void;
    ngOnInit(): void;
    onResize(event: any): void;
}
