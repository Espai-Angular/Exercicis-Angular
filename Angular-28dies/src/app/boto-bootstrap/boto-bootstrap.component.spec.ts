import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoBootstrapComponent } from './boto-bootstrap.component';

describe('BotoBootstrapComponent', () => {
  let component: BotoBootstrapComponent;
  let fixture: ComponentFixture<BotoBootstrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotoBootstrapComponent]
    });
    fixture = TestBed.createComponent(BotoBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
