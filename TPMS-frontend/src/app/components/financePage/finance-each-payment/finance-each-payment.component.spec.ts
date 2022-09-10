import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceEachPaymentComponent } from './finance-each-payment.component';

describe('FinanceEachPaymentComponent', () => {
  let component: FinanceEachPaymentComponent;
  let fixture: ComponentFixture<FinanceEachPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceEachPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceEachPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
