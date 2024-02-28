import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemAreaFormComponent } from './passagem-area-form.component';

describe('PassagemAreaFormComponent', () => {
  let component: PassagemAreaFormComponent;
  let fixture: ComponentFixture<PassagemAreaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassagemAreaFormComponent]
    });
    fixture = TestBed.createComponent(PassagemAreaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
