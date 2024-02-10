import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JReaderAppComponent } from './app.component';

describe('JReaderAppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        JReaderAppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(JReaderAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'JReader'`, () => {
    const fixture = TestBed.createComponent(JReaderAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('JReader');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(JReaderAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, JReader');
  });
});
