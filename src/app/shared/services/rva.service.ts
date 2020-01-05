import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError as observableThrowError } from 'rxjs';
import { catchError, map, tap, delay } from 'rxjs/operators';

import { EMail } from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class RVAService {

  constructor(private http: HttpClient) {}

  public sendEMail(request: EMail): Observable<EMail> {
    // const url = 'https://kppd65vakc.execute-api.us-west-2.amazonaws.com/dev/email';
    const url = 'https://kppd65vakc.execute-api.us-west-2.amazonaws.com/prod/email';

    return this.http.post<EMail>(url, JSON.stringify(request), {}).pipe(
      delay(environment.simulatedLatency),
      catchError(this.handleError));
  }

  private handleError(httpErr: HttpErrorResponse) {
    if (httpErr.error instanceof ErrorEvent) {
      console.error(`An error occurred: ${httpErr.error.message}`);
    } else {
      console.error(
        `Server error response code ${httpErr.status}, body: ${httpErr.error}`
      );
    }
    return observableThrowError(httpErr);
  }

}
