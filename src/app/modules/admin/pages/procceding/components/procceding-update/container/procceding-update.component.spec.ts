import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProccedingUpdateComponent } from './procceding-update.component';

describe('ProccedingUpdateComponent', () => {
  let component: ProccedingUpdateComponent;
  let fixture: ComponentFixture<ProccedingUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProccedingUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProccedingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
