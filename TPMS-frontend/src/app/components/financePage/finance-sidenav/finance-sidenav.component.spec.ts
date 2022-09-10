import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceSidenavComponent } from './finance-sidenav.component';

describe('FinanceSidenavComponent', () => {
  let component: FinanceSidenavComponent;
  let fixture: ComponentFixture<FinanceSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
