import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketValidationComponentComponent } from './ticket-validation-component.component';

describe('TicketValidationComponentComponent', () => {
  let component: TicketValidationComponentComponent;
  let fixture: ComponentFixture<TicketValidationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketValidationComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketValidationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
