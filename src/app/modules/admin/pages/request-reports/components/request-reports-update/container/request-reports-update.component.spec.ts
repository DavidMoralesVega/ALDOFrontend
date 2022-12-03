import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestReportsUpdateComponent } from './request-reports-update.component';

describe('RequestReportsUpdateComponent', () => {
  let component: RequestReportsUpdateComponent;
  let fixture: ComponentFixture<RequestReportsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestReportsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestReportsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
