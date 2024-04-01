import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface ConsultaFactura {
  rfc: string;
  ticket: number;
  fecha: string;
  descargar: string;
}

const ELEMENT_DATA: ConsultaFactura[] = [
  {ticket: 1223, rfc: 'XAXX 010101 000', fecha: '28/03/24', descargar: 'H'},
  {ticket: 1224, rfc: 'XAXX 010101 000', fecha: '27/03/24', descargar: 'He'},
];



@Component({
  selector: 'app-consulta-factura-component',
  templateUrl: './consulta-factura-component.component.html',
  styleUrl: './consulta-factura-component.component.css'
})
export class ConsultaFacturaComponentComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  
  displayedColumns: string[] = ['ticket', 'rfc', 'fecha', 'descargar'];
  dataSource = ELEMENT_DATA;

}
