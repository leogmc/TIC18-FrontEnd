import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorPropriedadeComponent } from './valor-propriedade.component';

describe('ValorPropriedadeComponent', () => {
  let component: ValorPropriedadeComponent;
  let fixture: ComponentFixture<ValorPropriedadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValorPropriedadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValorPropriedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
