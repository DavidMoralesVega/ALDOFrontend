import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentLawUpdateComponent } from './departament-law-update.component';

describe('DepartamentLawUpdateComponent', () => {
  let component: DepartamentLawUpdateComponent;
  let fixture: ComponentFixture<DepartamentLawUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentLawUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentLawUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
