import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

//Tabla con filtro
export interface ConsultaGlobal {
  rfc: string;
  ticket: number;
  fecha: string;
  descargar: string;
}

const ELEMENT_DATA: ConsultaGlobal[] = [
  {ticket: 111, rfc: 'XAXX010101000', fecha: '01/04/2024', descargar: ''},
  {ticket: 112, rfc: 'XBXX010101000', fecha: '01/04/2024', descargar: ''},
  {ticket: 113, rfc: 'XCXX010101000', fecha: '02/04/2024', descargar: ''},
  {ticket: 114, rfc: 'XDXX010101000', fecha: '02/04/2024', descargar: ''},
  {ticket: 115, rfc: 'XEXX010101000', fecha: '03/04/2024', descargar: ''},

];
//


@Component({
  selector: 'app-consulta-factura-global',
  templateUrl: './consulta-factura-global.component.html',
  styleUrl: './consulta-factura-global.component.css'
})
export class ConsultaFacturaGlobalComponent {
  displayedColumns: string[] = ['ticket', 'rfc', 'fecha', 'descargar'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
