import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecasComponent } from './pecas.component';

describe('PecasComponent', () => {
  let component: PecasComponent;
  let fixture: ComponentFixture<PecasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PecasComponent]
    });
    fixture = TestBed.createComponent(PecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
