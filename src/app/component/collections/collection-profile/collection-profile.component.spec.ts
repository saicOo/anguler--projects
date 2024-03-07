import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionProfileComponent } from './collection-profile.component';

describe('CollectionProfileComponent', () => {
  let component: CollectionProfileComponent;
  let fixture: ComponentFixture<CollectionProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
