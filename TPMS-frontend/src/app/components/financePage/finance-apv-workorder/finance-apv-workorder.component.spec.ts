import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceApvWorkorderComponent } from './finance-apv-workorder.component';

describe('FinanceApvWorkorderComponent', () => {
  let component: FinanceApvWorkorderComponent;
  let fixture: ComponentFixture<FinanceApvWorkorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceApvWorkorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceApvWorkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
