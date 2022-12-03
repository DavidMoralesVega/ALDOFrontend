import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestWrittenComponent } from './request-written.component';

describe('RequestWrittenComponent', () => {
  let component: RequestWrittenComponent;
  let fixture: ComponentFixture<RequestWrittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestWrittenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestWrittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
