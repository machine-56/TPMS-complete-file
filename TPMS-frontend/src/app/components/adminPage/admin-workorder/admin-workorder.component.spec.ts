import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWorkorderComponent } from './admin-workorder.component';

describe('AdminWorkorderComponent', () => {
  let component: AdminWorkorderComponent;
  let fixture: ComponentFixture<AdminWorkorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWorkorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminWorkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
