import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionsUpdateComponent } from './resolutions-update.component';

describe('ResolutionsUpdateComponent', () => {
  let component: ResolutionsUpdateComponent;
  let fixture: ComponentFixture<ResolutionsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolutionsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolutionsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
