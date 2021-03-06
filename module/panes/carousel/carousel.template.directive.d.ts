import { TemplateRef } from '@angular/core';
export declare class AmexioTemplateDirective {
    template: TemplateRef<any>;
    type: string;
    name: string;
    constructor(template: TemplateRef<any>);
    getType(): string;
}
