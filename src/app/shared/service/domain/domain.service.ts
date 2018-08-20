import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { DomainType } from '@app/shared/model/domain/domain-type';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class DomainService {
  
  constructor(private http: HttpClient) { }

  getDomain(domainRequestURL: string){
    return this.http.get<DomainType[]>(domainRequestURL);
  }

  getDomainResponse(domainRequestURL: string): Observable<HttpResponse<DomainType>> {
    return this.http.get<DomainType>(domainRequestURL, {observe: 'response' });
  }
  
  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    }else{
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    //return throw ('Something bad happened; please try again later.');
  };
}
