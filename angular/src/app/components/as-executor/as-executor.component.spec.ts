import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsExecutorComponent } from './as-executor.component';

describe('AsExecutorComponent', () => {
  let component: AsExecutorComponent;
  let fixture: ComponentFixture<AsExecutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsExecutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsExecutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
