import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateByIdComponent } from './update-by-id.component';

describe('UpdateByIdComponent', () => {
  let component: UpdateByIdComponent;
  let fixture: ComponentFixture<UpdateByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
