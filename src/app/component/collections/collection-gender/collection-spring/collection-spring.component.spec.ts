import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionSpringComponent } from './collection-spring.component';

describe('CollectionSpringComponent', () => {
  let component: CollectionSpringComponent;
  let fixture: ComponentFixture<CollectionSpringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionSpringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionSpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
