import { PdfParameter } from "@app/models/pdf-parameter";
import { Alignment } from "pdfmake/interfaces";

export const createLayout = ({ header, text }: PdfParameter) => {
 return {
    content: [
      {
        text: header.headerTextTitle + '\n\n',
        style: 'header'
      },
      header.headerText + '\n\n',
      {
        text: text.text,
        style: 'text'
      },
    ],
    styles: {
      header: {
        fontSize: header.headerSize,
        bold: header.headerBold,
        color: header.headerColor,
        alignment: header.headerAlignment as Alignment
      },
      text: {
        //fontSize:25
      },
    }
  }
}

