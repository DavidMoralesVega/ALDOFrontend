import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionsCreateComponent } from './resolutions-create.component';

describe('ResolutionsCreateComponent', () => {
  let component: ResolutionsCreateComponent;
  let fixture: ComponentFixture<ResolutionsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolutionsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolutionsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
