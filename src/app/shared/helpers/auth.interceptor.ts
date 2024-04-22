import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StorageService } from 'src/app/services/storage.service';
import { PopupsService } from 'src/app/services/popups.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private storage: StorageService,
    private popupSer: PopupsService
  ) {}

  /**
   * Intercept
   *
   * @param req
   * @param next
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request object
    let newReq = req.clone();
    newReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        'Bearer ' + this.storage.getToken(),
      ).set('Access-Control-Allow-Origin', '*'),
    });
    // Response
    return next.handle(newReq).pipe(
      catchError((error) => {
        // console.log("Error",error);

        // Catch "401 Unauthorized" responses
        if ((error instanceof HttpErrorResponse && error.status === 404) || error.status == 401) {
          // console.log("Error 404",error);
          // Log out
          // this._authService.logout({ deviceId: this._authService.deviceId });
          // Reload the app
          // location.reload();
          // this._alertService.show_alert(
          //   this.translate.getTranslation(error.error.message),
          //   '',
          //   'error'
          // );
          this.storage.removeAllProperties();
          this.popupSer.openLoginPopup();
        } else if (
          error instanceof HttpErrorResponse &&
          (error.status === 500 || error.status === 400)
        ) {
          // return throwError(() => new Error(error.message));
          // display errors
          // if (!error.url?.includes('technicalSupport')) {
          //   this._alertService.showValidationErrors(error.error?.message);
          // }
        }
        // if any other error return it to calling api
        return throwError(() => new Error(error));
      })
    );
  }
}
