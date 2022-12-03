import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognitionUpdateComponent } from './recognition-update.component';

describe('RecognitionUpdateComponent', () => {
  let component: RecognitionUpdateComponent;
  let fixture: ComponentFixture<RecognitionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecognitionUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecognitionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
