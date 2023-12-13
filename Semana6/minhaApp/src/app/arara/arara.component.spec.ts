import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AraraComponent } from './arara.component';

describe('AraraComponent', () => {
  let component: AraraComponent;
  let fixture: ComponentFixture<AraraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AraraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AraraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
