import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEachInvoiceComponent } from './admin-each-invoice.component';

describe('AdminEachInvoiceComponent', () => {
  let component: AdminEachInvoiceComponent;
  let fixture: ComponentFixture<AdminEachInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEachInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEachInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
