import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketValidationComponentComponent } from '../ticket-validation-component/ticket-validation-component.component';

@Component({
  selector: 'app-genera-factura-component',
  templateUrl: './genera-factura-component.component.html',
  styleUrl: './genera-factura-component.component.css',

})
export class GeneraFacturaComponentComponent implements OnInit{
  // Primer pestaña
  formularioFisicaM!: FormGroup;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  typeperson: string[] = ['Fisica', 'Moral'];
  ticketNumber!:string;
  ticketExists: boolean = false;
  matcher = new MyErrorStateMatcher();


  onSubmit( ) {
    if (this.formularioFisicaM.valid) {
      const formData = this.formularioFisicaM.value;
      console.log('Datos del formulario:', formData); 
      alert('Formulario enviado correctamente');
      this.formularioFisicaM.reset();
    } else {
      alert('Por favor, completa el formulario correctamente antes de enviarlo.');
    }
  }
  // Termina primer pestaña


  // Segunda pestaña
  formularioExtranjero!: FormGroup;
  ticketNumberE: string = '';



  submitExtranjero(){
    if (this.formularioExtranjero.valid) {
      const formData = this.formularioExtranjero.value;
      console.log('Datos del formulario:', formData); 
      alert('Formulario enviado correctamente');
      this.formularioExtranjero.reset();
    } else {
      alert('Por favor, completa el formulario correctamente antes de enviarlo.');
    }
  }
  // Termina segunda pestaña

  //tercer pestaña
  formularioAcreditarP!: FormGroup;

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

  //termina tercer pestaña

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.buildFormExtranjero();
    this.buildFormFisicaM();
    this.buildFormAcreditarP();
  }

  //primer pestaña
  private buildFormFisicaM(){
    this.formularioFisicaM = this.formBuilder.group({
      ticketNumber: [{ value: '', disabled: false }, Validators.required],
      rfc: [{ value: '', disabled: false }, Validators.required],
      razon: [{ value: '', disabled: false }, Validators.required],
      apellidoP: [{ value: '', disabled: false }, Validators.required],
      apellidoM: [{ value: '', disabled: false }, Validators.required],
      regimenFiscal: [{ value: '', disabled: false }, Validators.required],
      usoDelCFDI: [{ value: '', disabled: false }, Validators.required],
      cp: [{ value: '', disabled: false }, Validators.required],
      estado: [{ value: '', disabled: false }, Validators.required],
      municipio: [{ value: '', disabled: false }, Validators.required],
      colonia: [{ value: '', disabled: false }, Validators.required],
      calle: [{ value: '', disabled: false }, Validators.required],
      numE: [{ value: '', disabled: false }, Validators.required],
      numI: [{ value: '', disabled: false }, Validators.required],
      tipoPersona: [{ value: '', disabled: false }, Validators.required],
      email: this.emailFormControl
    });
  }
  //Form de primer pestaña

  //Segundo Formulario
  private buildFormExtranjero(){
    this.formularioExtranjero = this.formBuilder.group({
      // Se uso la "E" al final de cada variable por "Extranjero"
      ticketNumberE: [''],
      rfcE:['', Validators.required],
      nombreE:['', Validators.required],
      regimenFiscalE: ['', Validators.required],
      usoDelCFDIE:['', Validators.required],
      paisE:['', Validators.required],
      pasaporteE:['', Validators.required]
    });
  }

  //Tercer Formulario
  private buildFormAcreditarP(){
    this.formularioAcreditarP = this.formBuilder.group({
      ticketNumberAP: [{ value: '', disabled: false }, Validators.required],
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
      email: this.emailFormControl
    });
  }


  validar(){
    if (this.ticketNumberE === '002') {
      alert('El número de ticket es válido');
    } else {
      alert('El número de ticket no es válido');
    }
  }

  validarticket(){
    if (this.ticketNumberE === '003') {
      alert('El número de ticket es válido');
    } else {
      alert('El número de ticket no es válido');
    }
  }

  // disableSelect = new FormControl(false);
  disableSelect = { value: false };

  openValidationModal(): void {
    const ticketNumberControl = this.formularioFisicaM.get('ticketNumber');
    const ticketNumberValue = ticketNumberControl ? ticketNumberControl.value : null;
  
    const dialogRef = this.dialog.open(TicketValidationComponentComponent, {
      width: '250px',
      data: { ticketNumber: ticketNumberValue }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (this.formularioFisicaM && ticketNumberControl) {
        ticketNumberControl.setValue('');
      }
    });
  }


}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


