import { AfterContentInit, OnInit, QueryList } from '@angular/core';
import { ChartAreaComponent } from '../chartarea/chart.area.component';
import { ChartLegendComponent } from '../chartlegend/chart.legend.component';
import { ChartTitleComponent } from '../charttitle/chart.title.component';
import { ChartLoaderService } from '../chart.loader.service';
export declare class LineChartComponent implements AfterContentInit, OnInit {
    private loader;
    private options;
    private lineData;
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
    description : For the use of local data
    */
    data: any;
    backgroundcolor: string;
    hasLoaded: boolean;
    chartLegendComp: QueryList<ChartLegendComponent>;
    chartTitleComp: QueryList<ChartTitleComponent>;
    chartAreaComp: QueryList<ChartAreaComponent>;
    chartAreaArray: ChartAreaComponent[];
    chartAreaComponent: ChartAreaComponent;
    chartLegendArray: ChartLegendComponent[];
    chartLengendComponent: ChartLegendComponent;
    chartTitleArray: ChartTitleComponent[];
    chartTitleComponent: ChartTitleComponent;
    private linechart;
    constructor(loader: ChartLoaderService);
    isCurrency(item: any): boolean;
    drawChart(): void;
    chartTitleTextStyle(): {
        color: string;
        fontName: string;
        fontsize: number;
        bold: true;
        italic: true;
    };
    chartLegendStyle(): {
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
    chartBackgroundStyle(): {
        backgroundcolor: string;
        left: number;
        top: number;
        height: number;
        width: number;
    };
    onClick(e: any): void;
    ngAfterContentInit(): void;
    createTable(array: any[]): any;
    ngOnInit(): void;
    onResize(event: any): void;
}
