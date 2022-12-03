import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestReportsCreateComponent } from './request-reports-create.component';

describe('RequestReportsCreateComponent', () => {
  let component: RequestReportsCreateComponent;
  let fixture: ComponentFixture<RequestReportsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestReportsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestReportsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
