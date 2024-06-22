import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor (private readonly router : Router) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token && token !== 'undefined') {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req).pipe(
      tap((request) => {
        if(request instanceof HttpResponse){
          if(request.body.reloggin){
            this.router.navigate(['/auth/login']);
          }
        }
      }),
      catchError((response: HttpErrorResponse) => {
          if(response.error.reloggin){
            this.router.navigate(['/auth/login']);
          }
        throw (response);
      })
    );
  }
}
