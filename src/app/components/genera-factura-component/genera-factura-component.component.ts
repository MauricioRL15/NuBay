import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-genera-factura-component',
  templateUrl: './genera-factura-component.component.html',
  styleUrl: './genera-factura-component.component.css',

})
export class GeneraFacturaComponentComponent implements OnInit{
  ticketNumber: string = '';
  rfc: string = '';
  razon: string = '';
  apellidoP: string = '';
  apellidoM: string = '';
  regimenFiscal: string= '';
  usoDelCFDI: string= '';
  cp: string= '';
  estado: string= '';
  municipio: string= '';
  colonia: string= '';
  calle: string= '';
  numE: string= '';
  numI: string= '';

  tipoPersona: string = '';
  typeperson: string[] = ['Fisica', 'Moral'];

  onSubmit() {
    // Proximamente se pude hacer la logica para enviar el formulario
    console.log('RFC:', this.rfc);
    console.log('Tipo de Persona:', this.tipoPersona);
    console.log('Razón Social:', this.razon);
    console.log('Apellido Paterno:', this.apellidoP);
    console.log('Apellido Materno:', this.apellidoM);
    console.log('Régimen Fiscal:', this.regimenFiscal);
    console.log('Uso del CFDI:', this.usoDelCFDI);
    console.log('Código Postal:', this.cp);
    console.log('Estado:', this.estado);
    console.log('Municipio:', this.municipio);
    console.log('Colonia:', this.colonia);
    console.log('Calle:', this.calle);
    console.log('Número Exterior:', this.numE);
    console.log('Número Interior:', this.numI);
  }

  constructor() {}

  ngOnInit() {}

  validate() {
    // Aquí se implementara la lógica para despues poder validar sin un número preestablecido 
    if (this.ticketNumber === '001') {
      alert('El número de ticket es válido');
    } else {
      alert('El número de ticket no es válido');
    }
  }

  // disableSelect = new FormControl(false);
  disableSelect = { value: false };

}
