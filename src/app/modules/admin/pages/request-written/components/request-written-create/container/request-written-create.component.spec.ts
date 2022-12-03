import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestWrittenCreateComponent } from './request-written-create.component';

describe('RequestWrittenCreateComponent', () => {
  let component: RequestWrittenCreateComponent;
  let fixture: ComponentFixture<RequestWrittenCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestWrittenCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestWrittenCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
