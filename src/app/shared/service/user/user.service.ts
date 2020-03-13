import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addFriend(data): Observable<any> {
    return this.http.post<any>('http://localhost:3001/add-friend', data);
  }

  getAllUser(): Observable<any> {
    return this.http.get<any>('http://localhost:3001/get-all-user');
  }
 }
