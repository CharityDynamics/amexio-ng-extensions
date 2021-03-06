import { ModuleWithProviders } from '@angular/core';
export * from '../services/data/common.data.service';
export * from '../services/script/script.data.service';
export * from './listbox/listbox.component';
export * from './tree/tree.component';
export * from './paginator/paginator.component';
export * from '../services/icon/icon.service';
export * from './treegrid/treedatatable.component';
export * from './googlemap/googlemap.component';
export * from './browser-panel/browser-panel.component';
export * from './tree/verticaltree/amexio-verticaltree.component';
export * from './tree/verticaltree/amexio-innerverticalnode.component';
export declare class AmexioDataModule {
    static forRoot(): ModuleWithProviders;
}
