import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAtendimentoComponent } from './cadastrar-atendimento.component';

describe('CadastrarAtendimentoComponent', () => {
  let component: CadastrarAtendimentoComponent;
  let fixture: ComponentFixture<CadastrarAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarAtendimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
