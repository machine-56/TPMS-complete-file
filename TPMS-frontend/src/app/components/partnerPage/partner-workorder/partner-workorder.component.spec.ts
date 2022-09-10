import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerWorkorderComponent } from './partner-workorder.component';

describe('PartnerWorkorderComponent', () => {
  let component: PartnerWorkorderComponent;
  let fixture: ComponentFixture<PartnerWorkorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerWorkorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerWorkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
