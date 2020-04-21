import { OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MinimizeService } from '../../panes/window/minimize-service.service';
export declare class BrowserPanelComponent implements OnInit {
    private sanitizer;
    private renderer;
    private _browserService;
    url: string;
    textName: string;
    urlFieldEditable: boolean;
    showBrowserWithWindow: boolean;
    reloadBtn: boolean;
    show: boolean;
    showChange: any;
    amexioComponentId: string;
    iframeurl: SafeResourceUrl;
    fullscreen: any;
    loadSite: any;
    newURL: any;
    lockIconShow: boolean;
    globalListenFunc: () => void;
    constructor(sanitizer: DomSanitizer, renderer: Renderer2, _browserService: MinimizeService);
    ngOnInit(): void;
    onCloseClick(): void;
    browserShowOnBtn(): void;
    onMinimizeClick(): void;
    onReloadPage(): void;
    maxScreenChange(): void;
}
