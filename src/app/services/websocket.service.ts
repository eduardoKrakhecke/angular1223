import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import {environment} from "@environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket(environment.BASE_URL_WEBSOCKET);
  }

  sendMessage(message: any) {
    this.socket$.next(message);
  }

  receiveMessage() {
    return this.socket$.asObservable();
  }
}
