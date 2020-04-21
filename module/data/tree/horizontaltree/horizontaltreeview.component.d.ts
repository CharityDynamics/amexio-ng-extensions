/**
 * Created by Kedar on 6-2-2020.
 */
import { AfterViewInit, OnInit, TemplateRef } from '@angular/core';
import { CommonDataService } from '../../../services/data/common.data.service';
export declare class HorizontalTreeViewComponent implements AfterViewInit, OnInit {
    dataService: CommonDataService;
    label: string;
    data: any[];
    httpurl: string;
    httpmethod: string;
    datareader: string;
    nodeClick: any;
    responseData: any;
    mask: boolean;
    treetemplates: any;
    parentTmp: TemplateRef<any>;
    constructor(dataService: CommonDataService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setData(httpResponse: any): void;
    nodeclick(node: any): void;
    generateIndex(data: any, parentId: number, rannumber: any): void;
}
