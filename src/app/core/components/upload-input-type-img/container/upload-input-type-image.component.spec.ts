import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadInputTypeImageComponent } from './upload-input-type-image.component';

describe('UploadInputTypeImageComponent', () => {
  let component: UploadInputTypeImageComponent;
  let fixture: ComponentFixture<UploadInputTypeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadInputTypeImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadInputTypeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
