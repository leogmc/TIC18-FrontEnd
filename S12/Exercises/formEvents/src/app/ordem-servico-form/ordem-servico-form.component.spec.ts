import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemServicoFormComponent } from './ordem-servico-form.component';

describe('OrdemServicoFormComponent', () => {
  let component: OrdemServicoFormComponent;
  let fixture: ComponentFixture<OrdemServicoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdemServicoFormComponent]
    });
    fixture = TestBed.createComponent(OrdemServicoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
