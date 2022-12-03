import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentLawComponent } from './departament-law.component';

describe('DepartamentLawComponent', () => {
  let component: DepartamentLawComponent;
  let fixture: ComponentFixture<DepartamentLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentLawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
