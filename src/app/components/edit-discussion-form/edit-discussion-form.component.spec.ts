import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiscussionFormComponent } from './edit-discussion-form.component';

describe('EditDiscussionFormComponent', () => {
  let component: EditDiscussionFormComponent;
  let fixture: ComponentFixture<EditDiscussionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDiscussionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDiscussionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
