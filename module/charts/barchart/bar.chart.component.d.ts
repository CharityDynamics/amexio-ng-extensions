import { AfterContentInit, OnInit, QueryList } from '@angular/core';
import { ChartAreaComponent } from '../chartarea/chart.area.component';
import { ChartLegendComponent } from '../chartlegend/chart.legend.component';
import { ChartTitleComponent } from '../charttitle/chart.title.component';
import { ChartLoaderService } from '../chart.loader.service';
export declare class BarChartComponent implements AfterContentInit, OnInit {
    private loader;
    private options;
    private barData;
    private chart;
    hasLoaded: boolean;
    id: any;
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
    width: string;
    height: string;
    stacked: boolean;
    xaxistitle: string;
    yaxistitle: string;
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
    private barchart;
    constructor(loader: ChartLoaderService);
    drawChart(): void;
    chartTitleTextStyle(): {
        color: string;
        fontName: string;
        fontsize: number;
        bold: true;
        italic: true;
    };
    createChartLegend(): {
        position: string;
        maxLines: number;
        textStyle: {
            color: string;
            fontsize: string;
            fontName: string;
            bold: true;
            alignment: string;
        };
    };
    createChartBar(): {
        backgroundcolor: string;
        left: number;
        top: number;
        height: number;
        width: number;
    };
    ngAfterContentInit(): void;
    ngOnInit(): void;
    onResize(event: any): void;
}
