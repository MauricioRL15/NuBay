import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class COPOMEXService {

  private apiUrl = 'https://api.copomex.com/query';
  private token = '34d37a8c-0b32-4c9e-9df8-cfdf2456f976';
  private tokenPruebas = 'pruebas';

  constructor(private http: HttpClient) { }

  // Método para obtener información de un código postal
  getInfoCodigoPostal(cp: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/info_cp/${cp}?token=${this.tokenPruebas}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  //Obtener Colonia por Municipio
  getColonia(municipio: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get_colonia_por_municipio/${municipio}?token=${this.tokenPruebas}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  //Obtiene todo los estados
  getEstado(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get_estados?token=${this.tokenPruebas}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  //Obtine los municipios a partir del estado seleccionado
  getEstadosMunicipios(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get_municipio_por_estado/Puebla?token=${this.tokenPruebas}`)
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(error: any): Observable<any> {
    console.error('Error en la solicitud:', error);
    return throwError(error);
  }

}
