import { AfterContentInit, OnInit, QueryList } from '@angular/core';
import { ChartAreaComponent } from '../chartarea/chart.area.component';
import { ChartLegendComponent } from '../chartlegend/chart.legend.component';
import { ChartTitleComponent } from '../charttitle/chart.title.component';
import { ChartLoaderService } from '../chart.loader.service';
export declare class PieChartComponent implements AfterContentInit, OnInit {
    private loader;
    private options;
    private pieData;
    private chart;
    id: any;
    width: string;
    height: string;
    hasLoaded: boolean;
    is3d: false;
    piehole: number;
    showChart: boolean;
    _data: any;
    /*
    Properties
    name : data
    datatype : any
    version : 4.0 onwards
    default : none
    description : sets the pie hole size
    */
    data: any;
    startangle: number;
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
    private piechart;
    constructor(loader: ChartLoaderService);
    drawChart(): void;
    charttitleTextStyle(): {
        color: string;
        fontName: string;
        fontsize: number;
        bold: true;
        italic: true;
    };
    chartLengendStyle(): {
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
    ngOnInit(): void;
    onResize(event: any): void;
}
