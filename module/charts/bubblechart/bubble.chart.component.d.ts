import { AfterContentInit, OnInit, QueryList } from '@angular/core';
import { ChartAreaComponent } from '../chartarea/chart.area.component';
import { ChartLegendComponent } from '../chartlegend/chart.legend.component';
import { ChartTitleComponent } from '../charttitle/chart.title.component';
import { HorizontalAxisComponent } from '../horizontalaxis/chart.horizontalaxis.component';
import { VerticalAxisComponent } from '../verticalaxis/chart.verticalaxis.component';
import { ChartLoaderService } from '../chart.loader.service';
export declare class BubbleChartComponent implements AfterContentInit, OnInit {
    private loader;
    private options;
    private bubbleData;
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
    axiscolor: any;
    backgroundcolor: string;
    hasLoaded: boolean;
    chartLegendComp: QueryList<ChartLegendComponent>;
    chartTitleComp: QueryList<ChartTitleComponent>;
    chartAreaComp: QueryList<ChartAreaComponent>;
    horizontalComp: QueryList<HorizontalAxisComponent>;
    horizontalArray: HorizontalAxisComponent[];
    horizontalComponent: HorizontalAxisComponent;
    verticalComp: QueryList<VerticalAxisComponent>;
    verticalArray: HorizontalAxisComponent[];
    verticalComponent: HorizontalAxisComponent;
    chartAreaArray: ChartAreaComponent[];
    chartAreaComponent: ChartAreaComponent;
    chartLegendArray: ChartLegendComponent[];
    chartLengendComponent: ChartLegendComponent;
    chartTitleArray: ChartTitleComponent[];
    chartTitleComponent: ChartTitleComponent;
    private bubblechart;
    constructor(loader: ChartLoaderService);
    drawChart(): void;
    createTitleTextStyle(): {
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
    createChartBackground(): {
        backgroundcolor: string;
        left: number;
        top: number;
        height: number;
        width: number;
    };
    createChartVertical(): {
        title: string;
        titleTextStyle: {
            color: string;
        };
    };
    createchartHorizontal(): {
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
