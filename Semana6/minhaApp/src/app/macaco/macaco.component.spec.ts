import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacacoComponent } from './macaco.component';

describe('MacacoComponent', () => {
  let component: MacacoComponent;
  let fixture: ComponentFixture<MacacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MacacoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
