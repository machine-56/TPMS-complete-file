import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerEachWorkorderComponent } from './partner-each-workorder.component';

describe('PartnerEachWorkorderComponent', () => {
  let component: PartnerEachWorkorderComponent;
  let fixture: ComponentFixture<PartnerEachWorkorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerEachWorkorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerEachWorkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
