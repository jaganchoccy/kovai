import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EcomInterceptorService } from './productInterceptor.service';

//preparing header for HTTP call
const httpOtions = {
 interceptor: new EcomInterceptorService(),
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
    
  })
};

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  //GET method for HTTP call
  makeHTTPGETRequest(url: string): Observable<any> {
    return this.http.get<any>(url, httpOtions).pipe(map(this.extractData));
  }

  //POST method for HTTP call
  makeHTTPPOSTRequest(url: string, data?: any): Observable<any> {
    httpOtions.headers.set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
    return this.http.post<any>(url, data, httpOtions).pipe(map(this.extractData));
  }
  
  // POST method for SUBMIT FORM with Token HTTP call
  makeHTTPPOSTRequestInitForm(url: string, data: any, authToken: any): Observable<any> {
    return this.http.post<any>(url, JSON.stringify(data), {
      headers: { 'content-type': 'multipart/form-data' }
    }).pipe(
      map(this.extractData));
  }

  // Single Attach API call
  makeHTTPPOSTRequestAttachmentForm(url: string, data: any, authToken: any): Observable<any> {
    return this.http.post<any>(url, data, {
      headers: { 'X-RequestDigest': authToken.value, 'content-type': 'application/json;odata=verbose', 'content-length': data.byteLength }
    }).pipe(
      map(this.extractData));
  }

  // POST method for EIDT FORM with Token HTTP call
  makeHTTPPUTRequestForm(url: string, data: any, authToken: any, eTagVal?: any): Observable<any> {
    return this.http.post<any>(url, JSON.stringify(data), {
      headers: { 'X-RequestDigest': authToken.value, 'content-type': 'application/json;odata=verbose', 'X-HTTP-Method': 'MERGE', 'IF-MATCH': eTagVal ? eTagVal : '*', 'prefer': 'return=representation' }
    }).pipe(
      map(this.extractData));
  }

  // Add an multiple attachment call back API Call
  makeAttachPromisecall(url: string, data: any, authToken: any) {
    const attchPostHttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;odata=verbose',
        'X-RequestDigest': authToken.value,
        'content-length': data.byteLength
      })
    };
    return this.http.post(url, data, attchPostHttpOptions);
  }

  // Delete an attachment API call
  makedeleteAttachPromisecall(url: string, authToken: any) {
    const delAttchHttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;odata=verbose',
        'X-RequestDigest': authToken.value,
        'X-HTTP-Method': 'DELETE'
      })
    };
    return this.http.delete(url, delAttchHttpOptions);
  }



}
