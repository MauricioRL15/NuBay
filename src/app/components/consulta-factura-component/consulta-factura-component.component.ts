import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketValidationComponentComponent } from '../ticket-validation-component/ticket-validation-component.component';

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
  {ticket: 1223, rfc: 'XAXX 010101 000', fecha: '28/03/24', descargar: ''},
  {ticket: 1224, rfc: 'XAXX 010101 000', fecha: '27/03/24', descargar: ''},
];

@Component({
  selector: 'app-consulta-factura-component',
  templateUrl: './consulta-factura-component.component.html',
  styleUrl: './consulta-factura-component.component.css'
})
export class ConsultaFacturaComponentComponent {

  formularioConsultaFactura!: FormGroup;
  ticketNumber:string='';
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  displayedColumns: string[] = ['ticket', 'rfc', 'fecha', 'descargar'];
  dataSource = ELEMENT_DATA;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.buildFormConsulta();
  }
  private buildFormConsulta(){
    this.formularioConsultaFactura = this.formBuilder.group({
      ticketNumber: [{ value: '', disabled: false }, Validators.required],
      email: this.emailFormControl
    });
  }
  onSubmit( ) {
    if (this.formularioConsultaFactura.valid) {
      const formData = this.formularioConsultaFactura.value;
      console.log('Datos del formulario:', formData); 
      alert('Formulario enviado correctamente');
      this.formularioConsultaFactura.reset();
    } else {
      alert('Por favor, completa el formulario correctamente antes de enviarlo.');
    }
  }
  openValidationModal(): void {
    const ticketNumberControl = this.formularioConsultaFactura.get('ticketNumber');
    const ticketNumberValue = ticketNumberControl ? ticketNumberControl.value : null;
  
    const dialogRef = this.dialog.open(TicketValidationComponentComponent, {
      width: '250px',
      data: { ticketNumber: ticketNumberValue }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (this.formularioConsultaFactura && ticketNumberControl) {
        ticketNumberControl.setValue('');
      }
    });
  }
}
