import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
  constructor() { }

  connect(token) {
    this.socket = io.connect((environment as any).urlSocketIo);
    this.socket.on('connect', function() {
      console.log('connect io');
      //this.emit('authenticate', {token: token});
    });
  }

  disconnect() {
    this.socket.disconnect();
  }

  emit(name: string, data: {}) {
    this.socket.emit(name, data);
  }

  listen(name: string) {
    return Observable.create((observer) => {
      this.socket.on(name, (message) => {
        observer.next(message);
      });
    });
  }

  getSocket() {
    return this.socket;
  }
}
