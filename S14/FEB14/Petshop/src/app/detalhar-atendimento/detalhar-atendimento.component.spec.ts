import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharAtendimentoComponent } from './detalhar-atendimento.component';

describe('DetalharAtendimentoComponent', () => {
  let component: DetalharAtendimentoComponent;
  let fixture: ComponentFixture<DetalharAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalharAtendimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalharAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
