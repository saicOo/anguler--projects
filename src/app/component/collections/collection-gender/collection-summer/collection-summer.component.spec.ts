import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionSummerComponent } from './collection-summer.component';

describe('CollectionSummerComponent', () => {
  let component: CollectionSummerComponent;
  let fixture: ComponentFixture<CollectionSummerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionSummerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionSummerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
