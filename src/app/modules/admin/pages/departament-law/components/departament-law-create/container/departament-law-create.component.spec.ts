import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentLawCreateComponent } from './departament-law-create.component';

describe('DepartamentLawCreateComponent', () => {
  let component: DepartamentLawCreateComponent;
  let fixture: ComponentFixture<DepartamentLawCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentLawCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentLawCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
