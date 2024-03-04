import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAtendimentoComponent } from './editar-atendimento.component';

describe('EditarAtendimentoComponent', () => {
  let component: EditarAtendimentoComponent;
  let fixture: ComponentFixture<EditarAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarAtendimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
