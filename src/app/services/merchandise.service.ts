import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Merchandise } from '../models/merchandise.model';


const baseUrl = 'http://localhost:8889/api/automotiveInventory/merchandise';

@Injectable({
  providedIn: 'root'
})
export class MerchandiseService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getAll(): Observable<Merchandise[]> {
    return this.http.get<Merchandise[]>(`${baseUrl}/all`)
    .pipe(retry(1), catchError(this.handleError));
  }

  get(id: any): Observable<Merchandise> {
    return this.http.get<Merchandise>(`${baseUrl}?id=${id}`)
    .pipe(retry(1), catchError(this.handleError));
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/save`,  JSON.stringify(data), this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  update( data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update`,JSON.stringify(data), this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  delete(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/delete`,JSON.stringify(data), this.httpOptions);
  }
  
  findByName(productName: any): Observable<Merchandise[]> {
    return this.http.get<Merchandise[]>(`${baseUrl}/findByName?productName=${productName}`)
    .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
 
}
