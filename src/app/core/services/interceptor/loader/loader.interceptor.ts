import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoaderService } from '../../loader/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private _ls : LoaderService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req).pipe(
          tap(event => {
              this._ls.loader.next(true);
              if(event.type == HttpEventType.Response){
                  if (event.status == 200){
                      this._ls.loader.next(false);
                  }
              }
          })
      )
  }
}
