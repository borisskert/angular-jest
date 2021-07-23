import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {By} from "@angular/platform-browser";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-jest'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng-jest');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ng-jest app is running!');
  });

  it('should show E-Mail sending button', () => {
    let buttonElement = fixture.debugElement.query(By.css('.e-mail-button'));

    expect(component.emailButtonText).toBe('Send E-Mail');
    expect(buttonElement.nativeElement.disabled).toBe(false);
  });

  it('should change button text after sending fake mail', waitForAsync(() => {
    let buttonElement = fixture.debugElement.query(By.css('.e-mail-button'));
    buttonElement.triggerEventHandler('click', null);

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.emailButtonText).toBe('E-Mail sent!');
      expect(buttonElement.nativeElement.disabled).toBe(true);
    });
  }));
});
