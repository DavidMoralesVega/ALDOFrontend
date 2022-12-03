import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsCreateComponent } from './calls-create.component';

describe('CallsCreateComponent', () => {
  let component: CallsCreateComponent;
  let fixture: ComponentFixture<CallsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
