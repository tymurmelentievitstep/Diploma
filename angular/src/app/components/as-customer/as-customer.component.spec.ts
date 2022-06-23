import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsCustomerComponent } from './as-customer.component';

describe('AsCustomerComponent', () => {
  let component: AsCustomerComponent;
  let fixture: ComponentFixture<AsCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
