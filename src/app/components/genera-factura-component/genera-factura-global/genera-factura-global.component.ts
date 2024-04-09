import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Ingresos {
  ticketI: number;
  montoI: number;
  fechaI: string;
  sucursalI: string;
}

export interface Egresos {
  ticket: number;
  monto: number;
  fecha: string;
  sucursal: string;
}

const ELEMENT_INGRESOS: Ingresos[] = [
  {ticketI: 123, montoI: 3000, fechaI: '02/04/2024', sucursalI: 'Sucursal 1'},
  {ticketI: 123, montoI: 3000, fechaI: '02/04/2024', sucursalI: 'Sucursal 2'},
  {ticketI: 123, montoI: 3000, fechaI: '02/04/2024', sucursalI: 'Sucursal 3'},

];

const ELEMENT_EGRESOS: Egresos[] = [
  {ticket: 1, monto: 1200, fecha: '04/04/2024', sucursal: 'Sucursal 1'},
  {ticket: 2, monto: 1300, fecha: '04/04/2024', sucursal: 'Sucursal 2'},
  {ticket: 3, monto: 1500, fecha: '04/04/2024', sucursal: 'Sucursal 3'},

];




@Component({
  selector: 'app-genera-factura-global',
  templateUrl: './genera-factura-global.component.html',
  styleUrl: './genera-factura-global.component.css',
})
export class GeneraFacturaGlobalComponent implements OnInit {
  
  // Tablas

  totalEgresos: number = 0;
  totalIngresos: number = 0;
  
  calcularTotal() {
    // this.totalEgresos = this.dataSourceE.data.reduce((total, current) => total + current.monto, 0);
    this.totalIngresos = this.dataSource.data.reduce((total, current) => total + current.montoI, 0);
   
  }
  
  updateTotalEgresos(row: Egresos) {
    if (this.selectionE.isSelected(row)) {
      this.totalEgresos -= row.monto;
    } else {
      this.totalEgresos += row.monto;
    }
  }

  displayedColumns: string[] = ['ticketI', 'montoI', 'fechaI', 'sucursalI','select'];
  dataSource = new MatTableDataSource<Ingresos>(ELEMENT_INGRESOS);
  selection = new SelectionModel<Ingresos>(true, []);

  displayedColumnsE: string[] = ['ticket', 'monto', 'fecha', 'sucursal','selectE'];
  dataSourceE = new MatTableDataSource<Egresos>(ELEMENT_EGRESOS);
  selectionE = new SelectionModel<Egresos>(true, []);

  /** Si el número de elementos seleccionados coincide con el número total de filas. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  isAllSelectedE() {
    const numSelected = this.selectionE.selected.length;
    const numRows = this.dataSourceE.data.length;
    return numSelected === numRows;
  }


  /** Selecciona todas las filas si no están todas seleccionadas; en caso contrario borra la selección.*/
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  toggleAllRowsE() {
    if (this.isAllSelectedE()) {
      this.selectionE.clear();
      return;
    }
  
    this.selectionE.select(...this.dataSourceE.data);
  }

  /** La etiqueta para la casilla de verificación en la fila pasada */
  checkboxLabel(row?: Ingresos): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.ticketI + 1}`;
  }

  checkboxLabelE(row?: Egresos): string {
    if (!row) {
      return `${this.isAllSelectedE() ? 'deselect' : 'select'} all`;
    }
    return `${this.selectionE.isSelected(row) ? 'deselect' : 'select'} row ${row.ticket + 1}`;
  }
  

  // Termina tablas
  

  formularioAcreditarP!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.buildFormAcreditarP();
    this.calcularTotal();
  }

  private buildFormAcreditarP(){
    this.formularioAcreditarP = this.formBuilder.group({
      rfcAP: [{ value: '', disabled: false }, Validators.required],
      nombreAP: [{ value: '', disabled: false }, Validators.required],
      regimenFiscalAP: [{ value: '', disabled: false }, Validators.required],
      usoDelCFDIAP: [{ value: '', disabled: false }, Validators.required],
      codigoPostalAP: [{ value: '', disabled: false }, Validators.required],
      estadoAP: [{ value: '', disabled: false }, Validators.required],
      municipioAP: [{ value: '', disabled: false }, Validators.required],
      coloniaAP: [{ value: '', disabled: false }, Validators.required],
      calleAP: [{ value: '', disabled: false }, Validators.required],
      numEAP: [{ value: '', disabled: false }, Validators.required],
      numIAP: [{ value: '', disabled: false }, Validators.required],
    });
  }



  submitAcreditarP(){
    if (this.formularioAcreditarP.valid) {
      const formData = this.formularioAcreditarP.value;
      console.log('Datos del formulario:', formData); 
      alert('Formulario enviado correctamente');
      this.formularioAcreditarP.reset();
    } else {
      alert('Por favor, completa el formulario correctamente antes de enviarlo.');
    }
  }
  onSubmit( ) {
    if (this.formularioAcreditarP.valid) {
      const formData = this.formularioAcreditarP.value;
      console.log('Datos del formulario:', formData); 
      alert('Formulario enviado correctamente');
      this.formularioAcreditarP.reset();
    } else {
      alert('Por favor, completa el formulario correctamente antes de enviarlo.');
    }
  }
  
  disableSelect = { value: false };

}
