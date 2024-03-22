import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaFacturaComponentComponent } from './consulta-factura-component.component';

describe('ConsultaFacturaComponentComponent', () => {
  let component: ConsultaFacturaComponentComponent;
  let fixture: ComponentFixture<ConsultaFacturaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaFacturaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaFacturaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
