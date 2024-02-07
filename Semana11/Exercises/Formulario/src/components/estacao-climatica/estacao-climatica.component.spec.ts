import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacaoClimaticaComponent } from './estacao-climatica.component';

describe('EstacaoClimaticaComponent', () => {
  let component: EstacaoClimaticaComponent;
  let fixture: ComponentFixture<EstacaoClimaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstacaoClimaticaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstacaoClimaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
