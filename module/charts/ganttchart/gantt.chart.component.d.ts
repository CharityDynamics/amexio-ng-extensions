import { OnInit } from '@angular/core';
import { ChartLoaderService } from '../chart.loader.service';
export declare class GanttChartComponent implements OnInit {
    private loader;
    private chart;
    id: any;
    width: string;
    showChart: boolean;
    _data: any;
    /*
    Properties
    name : data
    datatype : any
    version : 4.3 onwards
    default : none
    description : For the use of local data
    */
    data: any;
    criticalPathEnabled: boolean;
    innerGridTrackColor: string;
    innerGridDarkTrack: string;
    hasLoaded: boolean;
    private options;
    private ganttchart;
    constructor(loader: ChartLoaderService);
    drawChart(): void;
    onClick(e: any): void;
    createTable(array: any[]): any;
    ngOnInit(): void;
}
