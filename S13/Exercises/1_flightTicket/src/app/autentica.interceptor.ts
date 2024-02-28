import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AutenticaInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('O pedido http foi interceptado!, show demais!!!!!');
    console.log(request.url);
    const modifiedRequest = request.clone({headers: request.headers.append('Auth', 'jorge1234')});
    return next.handle(modifiedRequest).pipe(
      tap(event => {
        console.log("evento tap:"  + event);
        if (event.type === HttpEventType.Response) {

          console.log('A resposta chegoou, body data no interceptor: ');
          console.log(event.body);
        }
      })
    );
  }
}
