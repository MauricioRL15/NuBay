import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ticket-validation-component',
  templateUrl: './ticket-validation-component.component.html',
  styleUrl: './ticket-validation-component.component.css'
})
export class TicketValidationComponentComponent {
  constructor(
    public dialogRef: MatDialogRef<TicketValidationComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  get ticketNumber(): string {
    return this.data.ticketNumber;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close('cancel');
  }

  generate(): void {
    this.dialogRef.close('generate');
  }
}
