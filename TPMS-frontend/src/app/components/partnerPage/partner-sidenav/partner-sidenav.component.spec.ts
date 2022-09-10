import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerSidenavComponent } from './partner-sidenav.component';

describe('PartnerSidenavComponent', () => {
  let component: PartnerSidenavComponent;
  let fixture: ComponentFixture<PartnerSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
