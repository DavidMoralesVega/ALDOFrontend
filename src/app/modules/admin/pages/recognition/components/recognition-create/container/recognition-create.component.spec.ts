import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognitionCreateComponent } from './recognition-create.component';

describe('RecognitionCreateComponent', () => {
  let component: RecognitionCreateComponent;
  let fixture: ComponentFixture<RecognitionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecognitionCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecognitionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
