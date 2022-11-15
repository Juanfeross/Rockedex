import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { PkmLoadingService } from '../../shared/services/pkm-loading/pkm-loading.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private pkmLoadingService: PkmLoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.pkmLoadingService.loading(true);
    console.log(true, 'Interceptor');
    return next.handle(request).pipe(
      finalize(() => this.pkmLoadingService.loading(false))
    );
  }
}
