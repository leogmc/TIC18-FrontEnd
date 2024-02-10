import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WikiAppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        WikiAppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(WikiAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'wikipedia-restapi'`, () => {
    const fixture = TestBed.createComponent(WikiAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('wikipedia-restapi');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(WikiAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, wikipedia-restapi');
  });
});
