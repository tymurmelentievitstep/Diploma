import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem("token");

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: "Bearer " + token,
        },
      });
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let data = {
          error: error.error,
          status: error.status,
        };
        if (error.status === 401) {
          localStorage.clear();

          window.location.reload();
        }

        return throwError(data);
      })
    );
  }
}
