import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoComponent } from './boto.component';

describe('BotoComponent', () => {
  let component: BotoComponent;
  let fixture: ComponentFixture<BotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotoComponent]
    });
    fixture = TestBed.createComponent(BotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
