import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceEachWorkorderComponent } from './finance-each-workorder.component';

describe('FinanceEachWorkorderComponent', () => {
  let component: FinanceEachWorkorderComponent;
  let fixture: ComponentFixture<FinanceEachWorkorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceEachWorkorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceEachWorkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
