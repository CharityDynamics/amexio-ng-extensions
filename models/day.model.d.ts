import { AvailableSlotsModel } from './availableslots.model';
import { TimeModel } from './time.model';
export declare class DayModel {
    date: Date;
    twentyfourformat: boolean;
    timeslots: TimeModel[];
    availableSlots: AvailableSlotsModel[];
    constructor(date: Date, twentyfourformat: boolean, availableSlots: AvailableSlotsModel[]);
    setTimeSlots(timeslots: TimeModel[]): void;
    private markTimeSlots;
    private checkTimeSlots;
}
