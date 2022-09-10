import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenWorkorderComponent } from './admin-gen-workorder.component';

describe('AdminGenWorkorderComponent', () => {
  let component: AdminGenWorkorderComponent;
  let fixture: ComponentFixture<AdminGenWorkorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGenWorkorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGenWorkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
