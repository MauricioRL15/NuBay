import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualComponentComponent } from './manual-component.component';

describe('ManualComponentComponent', () => {
  let component: ManualComponentComponent;
  let fixture: ComponentFixture<ManualComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManualComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManualComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
