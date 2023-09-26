import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaCiutatsComponent } from './ciutat.component';

describe('LlistaCiutatsComponent', () => {
  let component: LlistaCiutatsComponent;
  let fixture: ComponentFixture<LlistaCiutatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LlistaCiutatsComponent],
    });
    fixture = TestBed.createComponent(LlistaCiutatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
