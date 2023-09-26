import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNovaCiutatComponent } from './form-nova-ciutat.component';

describe('FormNovaCiutatComponent', () => {
  let component: FormNovaCiutatComponent;
  let fixture: ComponentFixture<FormNovaCiutatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormNovaCiutatComponent]
    });
    fixture = TestBed.createComponent(FormNovaCiutatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
