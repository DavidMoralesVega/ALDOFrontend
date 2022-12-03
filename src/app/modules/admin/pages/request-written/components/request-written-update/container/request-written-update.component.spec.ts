import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestWrittenUpdateComponent } from './request-written-update.component';

describe('RequestWrittenUpdateComponent', () => {
  let component: RequestWrittenUpdateComponent;
  let fixture: ComponentFixture<RequestWrittenUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestWrittenUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestWrittenUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
