import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineZComponent } from './line-z.component';

describe('LineZComponent', () => {
  let component: LineZComponent;
  let fixture: ComponentFixture<LineZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineZComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
