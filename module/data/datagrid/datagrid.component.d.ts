import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList, Renderer2 } from '@angular/core';
import { CommonDataService } from '../../services/data/common.data.service';
import { AmexioGridColumnComponent } from './data.grid.column';
import { DataGridFilterComponent } from './datagrid.filter.component';
import { LifeCycleBaseComponent } from './../../base/lifecycle.base.component';
export declare class AmexioDatagridComponent extends LifeCycleBaseComponent implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {
    element: ElementRef;
    dataTableService: CommonDataService;
    private cd;
    private renderer;
    document: any;
    private componentLoaded;
    title: string;
    pagesize: number;
    httpurl: string;
    httpmethod: string;
    datareader: string;
    enablecheckbox: boolean;
    initialsearch: any;
    _data: any;
    data: any[];
    rowSelect: any;
    onSearchClick: any;
    selectedRowData: any;
    onHeaderClick: any;
    height: any;
    groupby: boolean;
    groupbydataindex: string;
    enabledatafilter: boolean;
    cclass: string;
    tableHeadercclass: string;
    tableTitlecclass: string;
    tableDatacclass: string;
    selectedrowcolor: string;
    totalDataCount: number;
    serverSidePaging: boolean;
    _columndefintion: any;
    columndefintion: any;
    enablecolumnfiter: boolean;
    enablecolumnfilter: boolean;
    globalfilter: boolean;
    contextmenu: any[];
    enableColumnHeader: boolean;
    enableHeader: boolean;
    rightClick: any;
    onPageChange: EventEmitter<any>;
    themeCss: any;
    amexioComponentId: string;
    columns: any[];
    viewRows: any[];
    maxPage: number;
    currentPage: number;
    sortColumn: any;
    pageNumbers: number[];
    selectedRowNo: number;
    selectAll: boolean;
    selectedRows: any[];
    summary: any[];
    contextStyle: any;
    summaryData: any[];
    isSummary: boolean;
    sortBy: number;
    cloneData: any;
    responseData: any;
    filterCloneData: any;
    rowId: any;
    previousData: any;
    columnPreviewData: any;
    showToolTip: boolean;
    showGroupByColumn: boolean;
    totalPages: number;
    filterResultData: any;
    filterValue: any;
    globalFilterOptions: any[];
    flag: boolean;
    tempContextMenu: any[];
    mouseLocation: {
        left: number;
        top: number;
    };
    posixUp: boolean;
    rightClickRowData: any;
    iconclassKey: string;
    isExpanded: boolean;
    mask: boolean;
    private checkIcon;
    private plusIcon;
    checkDefaultIcon: string;
    checkBoxActive: string;
    checkBoxSelectClass: string;
    globalClickListenFunc: () => void;
    showEnableColumnFilter: boolean;
    filterComRef: any[];
    columnCountArray: any[];
    arrayTabIndex: any[];
    tabindex: string;
    columnHiddenIndexArray: any[];
    prevlistindex: number;
    firstIndex: 1;
    listindex: number;
    componentId: string;
    gridId: string;
    elem: any;
    stringFilterArray: any[];
    numberFilterArray: any[];
    fliterFlag: boolean;
    cloneResponseData: any;
    filteredObject: any;
    resultData: any;
    filterRef: QueryList<DataGridFilterComponent>;
    columnRef: QueryList<AmexioGridColumnComponent>;
    pageId: any;
    constructor(element: ElementRef, dataTableService: CommonDataService, cd: ChangeDetectorRef, renderer: Renderer2, document: any);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    updateComponent(): void;
    ngAfterContentInit(): void;
    createConfig(): void;
    enableHeaderMethod(): void;
    setChangeData(httpResponse: any): void;
    setData(httpResponse: any): void;
    setPaginatorData(): void;
    setSelectedFlag(viewRows: any): void;
    setGroupByColumn(col: any): void;
    keyUpSearch(): void;
    checkStatus(opt: any): void;
    selectedOption(opt: any): void;
    removeGlobalFilter(): void;
    getGlobalFilteredData(filteredObj: any): void;
    checkValueInColumn(row: any, filteredObj: any): boolean;
    filterConditionMethod(filteredObj: any, option: any, opt: any): void;
    setstatus(condition: any): void;
    setColumnData(): void;
    commonMethod(data: any, groups: any): void;
    renderData(): void;
    private getPageSize;
    getResponseData(httpResponse: any): any;
    selectAllRecord(): void;
    onColumnCheck(column: any): void;
    onRowClick(rowData: any, rowIndex: any): void;
    loadPageData(pageInfo: any): void;
    getFilteredData(filteredObj: any): void;
    callFilterOperation(dataforfilter: any, element: any): void;
    filterOpertion(data: any, filterOpt: any): boolean;
    checkNumberFilter(filter: string, key: any, value: number): boolean;
    checkStringFilter(filter: string, key: any, value: string): boolean;
    setSelectedRow(viewRows: any, rowData: any, event: any): void;
    removeSelectedRows(viewRows: any, rowData: any, event: any): void;
    emitSelectedRows(): void;
    setGlobalFiterCheckFlag(): void;
    setDefaultFlag(): void;
    setCheckBoxSelectClass(): string;
    sortOnColHeaderClick(sortCol: any, clickEvent: any): void;
    setSortColumn(sortCol: any, _sortBy: number): void;
    sortData(): void;
    sortDataFunc(sortColDataIndex: any, sortOrder: any): void;
    sortOrderByBoolean(sortOrder: any, sortColDataIndex: any): void;
    sortOrderByNumber(sortOrder: any, sortColDataIndex: any): void;
    noGrpBySortOrder(sortOrder: any, x: any, y: any): 1 | 0 | -1;
    sortOrderGrpBy(sortOrder: any): void;
    onTabClick(btn: any): void;
    toogle(row: any, index: number): void;
    addRows(row: any, index: number): void;
    removeRows(row: any): void;
    isGroupChecking(row: any): boolean;
    selectParent(row: any): void;
    loadContextMenu(event: any, row: any, col: any, ref: any): void;
    rightClickDataEmit(Data: any): void;
    private getListPosition;
    private tempSelectedFlag;
    addListner(): void;
    removeListner(): void;
    ngOnDestroy(): void;
    onFilterIconClick(event: any): void;
    groupbyIconClick(): void;
    onEnableColumnClick(event: any): void;
    getFilterClick(): void;
    getSearchChange(event: any): void;
    arrowLeft(ref: any): void;
    arrowRight(ref: any): void;
    arrowUp(ref: any): void;
    arrowDown(ref: any): void;
    keyEnd(ref: any): void;
    findLastColumn(unitId: any, firstId: any, newLastId: any): void;
    keyHome(ref: any): void;
    findHomeColumn(unitId: any, firstId: any, newFirstId: any): void;
    keyControlHome(): void;
    findControlHomeColumn(unitId: any, firstId: any): void;
    keyControlEnd(): void;
    findControlEndColumn(unitId: any, firstId: any): void;
    getColumnCount(): void;
    findNextColumn(index: any, firstId: any): void;
    findPreviousColumn(index: any, firstId: any): void;
    checkFirstTabIndex(index: any): void;
    onArrowdownList(listId: any): void;
    onArrowUpList(listId: any): void;
    onArrowUpGlobalList(listId: any): void;
    onArrowdownGlobalList(listId: any): void;
    onPageDownClick(): void;
    onPageUpClick(): void;
    showGroupCol(): void;
    findContolEndGrpBy(): void;
    setColorPalette(themeClass: any): void;
    filterOperation(filteredObj: any, dataForFilter: any): any;
    sortInnerFunc(temp: string, data: any): any;
}
