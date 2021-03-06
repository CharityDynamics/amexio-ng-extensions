import { ControlValueAccessor } from '@angular/forms';
export declare class ValueAccessorBaseComponent<T> implements ControlValueAccessor {
    onTouchedCallback: () => void;
    onChangeCallback: (_: any) => void;
    innerValue: T;
    value: T;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    generateName(name: string, fieldlabel: string, inputType: string): string;
    getRandomString(): string;
    createCompId(inputType: any, name: any): string;
}
