import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBootstrapComponent } from './app-bootstrap.component';

describe('AppBootstrapComponent', () => {
  let component: AppBootstrapComponent;
  let fixture: ComponentFixture<AppBootstrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppBootstrapComponent]
    });
    fixture = TestBed.createComponent(AppBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
