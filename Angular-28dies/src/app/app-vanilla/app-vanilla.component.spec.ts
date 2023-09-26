import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVanillaComponent } from './app-vanilla.component';

describe('AppVanillaComponent', () => {
  let component: AppVanillaComponent;
  let fixture: ComponentFixture<AppVanillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppVanillaComponent]
    });
    fixture = TestBed.createComponent(AppVanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
