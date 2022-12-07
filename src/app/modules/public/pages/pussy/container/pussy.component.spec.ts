import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PussyComponent } from './pussy.component';

describe('PussyComponent', () => {
  let component: PussyComponent;
  let fixture: ComponentFixture<PussyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PussyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PussyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
