import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProccedingCreateComponent } from './procceding-create.component';

describe('ProccedingCreateComponent', () => {
  let component: ProccedingCreateComponent;
  let fixture: ComponentFixture<ProccedingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProccedingCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProccedingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
