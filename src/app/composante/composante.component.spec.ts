import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposanteComponent } from './composante.component';

describe('ComposanteComponent', () => {
  let component: ComposanteComponent;
  let fixture: ComponentFixture<ComposanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComposanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComposanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
