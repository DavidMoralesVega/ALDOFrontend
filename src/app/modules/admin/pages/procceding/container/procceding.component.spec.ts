import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProccedingComponent } from './procceding.component';

describe('ProccedingComponent', () => {
  let component: ProccedingComponent;
  let fixture: ComponentFixture<ProccedingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProccedingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProccedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
