import { Component } from '@angular/core';
import { WebsocketService } from "@app/services/websocket.service";

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.scss']
})
export class WebSocketComponent {

  receivedMessage: string =''
  message: string = ''

  constructor(private websockeService: WebsocketService) {
  }

  ngOnInit() {
    this.websockeService.receiveMessage().subscribe((obj) => {
      this.receivedMessage = obj.content;
    },(error: Error) => {
      console.error(error);
    });
  }

  sendMessage(message: string): void {
    this.websockeService.sendMessage({ content: message });
  }

}
