import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraFacturaComponentComponent } from './genera-factura-component.component';

describe('GeneraFacturaComponentComponent', () => {
  let component: GeneraFacturaComponentComponent;
  let fixture: ComponentFixture<GeneraFacturaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneraFacturaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneraFacturaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
