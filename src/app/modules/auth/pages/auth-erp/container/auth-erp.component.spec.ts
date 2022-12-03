import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthErpComponent } from './auth-erp.component';

describe('AuthErpComponent', () => {
  let component: AuthErpComponent;
  let fixture: ComponentFixture<AuthErpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthErpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthErpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
