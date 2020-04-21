import { EditableTextComponent } from './editable-text/editable-text.component';
export declare class AmexioRichEditorComponent {
    constructor();
    printTabSource: any;
    richTextContent: any;
    richHeight: number;
    enableSourceCode: boolean;
    toolbarPosition: string;
    editableComponentRef: EditableTextComponent;
    onCodeClick: any;
    emitSourceCode(data: any): void;
    onTabSourceCode(): void;
}
