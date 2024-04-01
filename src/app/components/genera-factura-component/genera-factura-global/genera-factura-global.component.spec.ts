import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraFacturaGlobalComponent } from './genera-factura-global.component';

describe('GeneraFacturaGlobalComponent', () => {
  let component: GeneraFacturaGlobalComponent;
  let fixture: ComponentFixture<GeneraFacturaGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneraFacturaGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneraFacturaGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
