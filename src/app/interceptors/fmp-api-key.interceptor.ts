import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FmpApiKeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {    
    if(!request.url.includes("financialmodelingprep")) { return next.handle(request); } // nur fmp api

    const apiKey = ""; // add FMP API KEY here
    const params = new HttpParams().set("apikey", apiKey);
    
    return next.handle(request.clone({ params: params}));
  }
}
