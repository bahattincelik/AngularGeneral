import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateilCustomerComponent } from './dateil-customer.component';

describe('DateilCustomerComponent', () => {
  let component: DateilCustomerComponent;
  let fixture: ComponentFixture<DateilCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateilCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateilCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
