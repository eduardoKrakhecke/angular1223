import {Alignment} from "pdfmake/interfaces";

export class PdfParameter {
  header: Header = new Header()
  text: Text = new Text()

  constructor() {
  }

}

export class Header {
  headerTextTitle: string = '';
  headerText: string = '';
  headerSize: number = 15;
  headerColor: string = '#0e0e0e';
  headerBold: boolean = true;
  headerAlignment: string = 'center';
}

export class Text {
  text: string = '';
  textSize: number = 10;
  textColor: string = '';
}
