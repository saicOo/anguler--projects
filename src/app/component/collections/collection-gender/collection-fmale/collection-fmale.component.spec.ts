import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionFmaleComponent } from './collection-fmale.component';

describe('CollectionFmaleComponent', () => {
  let component: CollectionFmaleComponent;
  let fixture: ComponentFixture<CollectionFmaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionFmaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionFmaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
