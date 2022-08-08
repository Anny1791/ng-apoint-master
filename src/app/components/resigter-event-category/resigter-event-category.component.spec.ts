import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResigterEventCategoryComponent } from './resigter-event-category.component';

describe('ResigterEventCategoryComponent', () => {
  let component: ResigterEventCategoryComponent;
  let fixture: ComponentFixture<ResigterEventCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResigterEventCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResigterEventCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
