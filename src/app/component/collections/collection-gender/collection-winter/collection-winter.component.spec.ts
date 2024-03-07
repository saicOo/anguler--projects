import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionWinterComponent } from './collection-winter.component';

describe('CollectionWinterComponent', () => {
  let component: CollectionWinterComponent;
  let fixture: ComponentFixture<CollectionWinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionWinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionWinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
