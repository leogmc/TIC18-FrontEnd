import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UescAppComponent } from './app.component';

describe('UescAppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UescAppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UescAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'UESC-app'`, () => {
    const fixture = TestBed.createComponent(UescAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('UESC-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(UescAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, UESC-app');
  });
});
