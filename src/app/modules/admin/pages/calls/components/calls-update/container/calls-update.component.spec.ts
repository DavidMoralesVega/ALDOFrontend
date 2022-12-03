import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsUpdateComponent } from './calls-update.component';

describe('CallsUpdateComponent', () => {
  let component: CallsUpdateComponent;
  let fixture: ComponentFixture<CallsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
