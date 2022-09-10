import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditWorkorderComponent } from './admin-edit-workorder.component';

describe('AdminEditWorkorderComponent', () => {
  let component: AdminEditWorkorderComponent;
  let fixture: ComponentFixture<AdminEditWorkorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditWorkorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditWorkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
