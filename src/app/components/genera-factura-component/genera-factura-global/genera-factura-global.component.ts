import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},

];

@Component({
  selector: 'app-genera-factura-global',
  templateUrl: './genera-factura-global.component.html',
  styleUrl: './genera-factura-global.component.css',
})
export class GeneraFacturaGlobalComponent implements OnInit {
  
  // Tablas
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','select'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  // Termina tablas

  formularioAcreditarP!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.buildFormAcreditarP();
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
