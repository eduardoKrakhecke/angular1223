import { Component } from '@angular/core';
import { editorConfig } from "@app/pages/text-editor/editor-config";
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ToastService } from "@app/components/shared/toast/toast.service";

import { messages } from "@app/constants/messages";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

import * as he from 'he';


pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent {

  htmlContent: any
  editorConfig = editorConfig as AngularEditorConfig

  constructor(private toastService: ToastService) {
  }

  save(): void {
    const decodedContent = he.decode(this.htmlContent);

    const documentDefinition = { content: decodedContent };
    this.toastService.showToast(messages.GENERIC_SUCCESS)


    /* let docDefinition = {
       header: 'C#Corner PDF Header',
       content: 'Sample PDF generated with Angular and PDFMake for C#Corner Blog'
     };

     pdfMake.createPdf(docDefinition).open();*/

  }
}
