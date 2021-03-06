import { EventEmitter, OnInit } from '@angular/core';
import { AmexioDateUtils } from '../../utils/dateutils';
export declare class AmexioCalendarComponent implements OnInit {
    displayHeaders: string[];
    calendarMonthData: any[];
    calendarWeekData: any[];
    currrentDate: any;
    currentState: string;
    _calenadrDate: any;
    prevMonthPressed: boolean;
    nextMonthPressed: boolean;
    dayPressed: boolean;
    weekPressed: boolean;
    monthPressed: boolean;
    yearPressed: boolean;
    adu: AmexioDateUtils;
    weekobject: {
        isEvent: boolean;
        details: null;
        title: null;
        hasTimeSlot: boolean;
        eventDateTime: null;
        events: any[];
        diff: number;
        diffwithslot: number;
        eventDetails: any;
    };
    weekHeaders: {
        title: any;
        daywiseevent: any;
        time: any;
    };
    prevbtnid: any;
    nextbtnid: any;
    daybtnid: any;
    weekbtnid: any;
    monthbtnid: any;
    yearbtnid: any;
    headertype: string;
    events: any[];
    title: string;
    onCloseClick: EventEmitter<any>;
    calendardate: any;
    eventColorGrouping: boolean;
    noOfEvents: number;
    onEventClicked: EventEmitter<any>;
    onMoreEventClick: EventEmitter<any>;
    constructor();
    onMoreEventClicked(event: any): void;
    ngOnInit(): void;
    initCalendar(): void;
    private validateEventData;
    private generatEventData;
    private hasEvent;
    private createData;
    private createYearData;
    private createDaysForCurrentMonths;
    private createDaysForCurrentWeek;
    private hasWeekEvent;
    private isEventPresent;
    private getWeekObject;
    setState(state: string): void;
    previous(): void;
    next(): void;
    onMonthEvent(event: any): void;
    onDayTimeWiseEvent(event: any): void;
    onYearEvent(event: any): void;
    onDaytimeHeaderClick(event: any): void;
    onYearHeaderClicked(event: any): void;
    navigateToDayMode(date: any): void;
    onMoreCloseClick(event: any): void;
}
