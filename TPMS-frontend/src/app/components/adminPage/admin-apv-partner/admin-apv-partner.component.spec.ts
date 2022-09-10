import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApvPartnerComponent } from './admin-apv-partner.component';

describe('AdminApvPartnerComponent', () => {
  let component: AdminApvPartnerComponent;
  let fixture: ComponentFixture<AdminApvPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApvPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminApvPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
