import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithGoogleButtonComponent } from './login-with-google-button.component';

describe('LoginWIthGoogleButtonComponent', () => {
  let component: LoginWithGoogleButtonComponent;
  let fixture: ComponentFixture<LoginWithGoogleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithGoogleButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginWithGoogleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
