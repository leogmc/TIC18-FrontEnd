import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAtendimentosComponent } from './listar-atendimentos.component';

describe('ListarAtendimentosComponent', () => {
  let component: ListarAtendimentosComponent;
  let fixture: ComponentFixture<ListarAtendimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarAtendimentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarAtendimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
