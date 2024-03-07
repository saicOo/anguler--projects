import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionMaleComponent } from './collection-male.component';

describe('CollectionMaleComponent', () => {
  let component: CollectionMaleComponent;
  let fixture: ComponentFixture<CollectionMaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionMaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionMaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
