import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEachWorkorderComponent } from './admin-each-workorder.component';

describe('AdminEachWorkorderComponent', () => {
  let component: AdminEachWorkorderComponent;
  let fixture: ComponentFixture<AdminEachWorkorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEachWorkorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEachWorkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
