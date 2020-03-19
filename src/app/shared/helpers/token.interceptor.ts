import {Injectable} from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');
    if (token) {
      req = req.clone({
        setHeaders: {
          'x-access-token': token,
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(req);
  }
}
