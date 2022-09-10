import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerInvoiceStatusComponent } from './partner-invoice-status.component';

describe('PartnerInvoiceStatusComponent', () => {
  let component: PartnerInvoiceStatusComponent;
  let fixture: ComponentFixture<PartnerInvoiceStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerInvoiceStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerInvoiceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
