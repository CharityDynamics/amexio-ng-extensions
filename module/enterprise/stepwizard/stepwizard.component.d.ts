import { AfterContentInit, QueryList } from '@angular/core';
import { DeviceQueryService } from './../../services/device/device.query.service';
import { StepWizardItemComponent } from './stepwizard.item.component';
export declare class StepWizardComponent implements AfterContentInit {
    private matchMediaService;
    showStepNumber: boolean;
    headerBackground: string;
    footerAlign: string;
    finalStage: any;
    onNextStepClick: any;
    onPreviousStepClick: any;
    stepItemQueryList: QueryList<StepWizardItemComponent>;
    stepItemList: StepWizardItemComponent[];
    title: string;
    data: {};
    isPhone: boolean;
    constructor(matchMediaService: DeviceQueryService);
    ngAfterContentInit(): void;
    private onNextStep;
    private onPreviousStep;
}
