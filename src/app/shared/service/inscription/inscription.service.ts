import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http: HttpClient) {}

  signup(body): Observable<any> {
    return this.http.post<any>('http://localhost:3001/signup', body);
  }
}
