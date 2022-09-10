import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApvInvoiceComponent } from './admin-apv-invoice.component';

describe('AdminApvInvoiceComponent', () => {
  let component: AdminApvInvoiceComponent;
  let fixture: ComponentFixture<AdminApvInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApvInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminApvInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
