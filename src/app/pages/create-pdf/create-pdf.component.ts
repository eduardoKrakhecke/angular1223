import { Component } from '@angular/core';

import pdfMake from "pdfmake/build/pdfmake";
import { createLayout } from './pdf-layout'
import { PdfParameter } from "@app/models/pdf-parameter";

@Component({
  selector: 'app-create-pdf',
  templateUrl: './create-pdf.component.html',
  styleUrls: ['./create-pdf.component.scss']
})
export class CreatePdfComponent {

  pdfParameter = new PdfParameter()

  create(): void {
    const layout = createLayout(this.pdfParameter)
     pdfMake.createPdf(layout).open();
  }

}
