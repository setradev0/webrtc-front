import { Observable } from 'rxjs';
import { Message } from './../../model/message';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  constructor(private http: HttpClient) { }

  send(message: Message): Observable<Message> {
    return this.http.post<Message>('http://localhost:3001/send-message', message);
  }
  
  getConversation(data): Observable<any> {
    return this.http.post<any>('http://localhost:3001/get-conversation', data);
  }
}
