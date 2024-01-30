import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private toater: ToastrService) {}
  private baseUrl = `${environment.baseApi}/vegeStore/api/v1`;

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    // const user = sessionStorage.getItem("user");

    // if (!user) {
    //   return next.handle(req);
    // }

    try {
      // const token = JSON.parse(user).token;
      const modifiedRequest = req.clone({
        url: `${this.baseUrl}/${req.url}`,
        // headers: req.headers.set("Authorization", `${token}`),
      });

      return next.handle(modifiedRequest).pipe(
        catchError((error: HttpErrorResponse) => {
          // Handle errors here, you may want to log or display messages
          let err = error?.error;
          console.error("Error with:", err.error);
          if (err?.error) {
            this.toater.error(err.message);
            return throwError(() => error);
          }
          if (err?.message) {
            this.toater.error(err.message);
            return throwError(() => error);
          }
          return throwError(() => error);
        }),
      );
    } catch (err) {
      return throwError(
        () => new Error("Something bad happened; please try again later."),
      );
    }
  }

  // intercept(
  //   request: HttpRequest<unknown>,
  //   next: HttpHandler,
  // ): Observable<HttpEvent<unknown>> {
  //   // Get the token from sessionStorage
  //   const token = sessionStorage.getItem("token");

  //   // If no token, proceed without modification
  //   if (!token) {
  //     return next.handle(request);
  //   }

  //   // Construct the new request with the Authorization header
  //   const apiUrl =
  //     request.url === `http://192.168.100.17/amiscript.php`
  //       ? request.url
  //       : `${this.baseUrl}/${request.url}`;

  //   const modifiedRequest = request.clone({
  //     headers: request.headers.set("Authorization", token),
  //     url: apiUrl,
  //   });

  //   // Pass the modified request through the interceptor
  //   return next.handle(modifiedRequest).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       // Handle errors here, you may want to log or display messages
  //       let err = error?.error;
  //       if (err?.meta) {
  //         // Handle specific error case
  //         console.error("Error with meta:", err.meta);
  //       }
  //       if (error?.message) {
  //         // Handle general error case
  //         console.error("General error:", error.message);
  //       }
  //       // Pass the error along to be caught by the calling code
  //       return throwError(() => error);
  //     }),
  //   );
  // }
}
