/**
 * Created by dattaram on 23/8/17.
 */
import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LifeCycleBaseComponent } from '../../base/lifecycle.base.component';
export declare class ContentComponent extends LifeCycleBaseComponent implements OnInit, OnChanges {
    bgImgUrl: any;
    title: string;
    description: string;
    contents: any;
    videoLink: any;
    rate: any;
    max: any;
    isReadonly: boolean;
    enableWatch: boolean;
    enableMyList: boolean;
    ageLimit: any;
    releaseYear: any;
    seasonNo: number;
    matchPercentage: any;
    closeEnable: boolean;
    onWatchClick: EventEmitter<any>;
    onAddListClick: EventEmitter<any>;
    onLikeClick: EventEmitter<any>;
    onUnlikeLikeClick: EventEmitter<any>;
    onCloseClick: EventEmitter<any>;
    size: string;
    overviewData: any;
    smallScreen: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    playVideo(): void;
    addToList(): void;
    onResize(event: any): void;
    getClassName(): "button" | "button-small";
    unlikeClick(): void;
    likeClick(): void;
    closeDetailPage(): void;
}
