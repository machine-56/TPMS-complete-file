import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerEditProfileComponent } from './partner-edit-profile.component';

describe('PartnerEditProfileComponent', () => {
  let component: PartnerEditProfileComponent;
  let fixture: ComponentFixture<PartnerEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
