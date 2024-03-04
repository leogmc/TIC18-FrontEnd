import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPecasComponent } from './form-pecas.component';

describe('FormPecasComponent', () => {
  let component: FormPecasComponent;
  let fixture: ComponentFixture<FormPecasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPecasComponent]
    });
    fixture = TestBed.createComponent(FormPecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
