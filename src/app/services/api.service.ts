import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getRegimenFiscal(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/regimen-fiscal`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getRegimenFiscalPersonaFisica(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/regimen-fiscal?cRF_AplicaFisica=true`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getRegimenFiscalPersonaMoral(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/regimen-fiscal?cRF_AplicaMoral=true`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUsoCFDI(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/uso-cfdi`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCFDIPersonaFisica(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/uso-cfdi?cUCFDI_AplicaFisica=true`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCFDIPersonaMoral(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/uso-cfdi?cUCFDI_AplicaMoral=true`)
      .pipe(
        catchError(this.handleError)
      );
  }


  getUsoCFDIBasedOnRegimenFiscalAndPersona(tipoPersona: string, regimenFiscalId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/uso-cfdi?tipoPersona=${tipoPersona}&regimenFiscalId=${regimenFiscalId}`)
      .pipe(
        catchError(this.handleError)
      );
  }
  



  private handleError(error: any): Observable<any> {
    console.error('Error en la solicitud:', error);
    return throwError(error);
  }

}
