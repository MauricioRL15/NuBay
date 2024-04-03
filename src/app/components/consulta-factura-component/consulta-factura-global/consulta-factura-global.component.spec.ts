import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaFacturaGlobalComponent } from './consulta-factura-global.component';

describe('ConsultaFacturaGlobalComponent', () => {
  let component: ConsultaFacturaGlobalComponent;
  let fixture: ComponentFixture<ConsultaFacturaGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaFacturaGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaFacturaGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
