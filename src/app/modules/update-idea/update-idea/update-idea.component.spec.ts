import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIdeaComponent } from './update-idea.component';

describe('UpdateIdeaComponent', () => {
  let component: UpdateIdeaComponent;
  let fixture: ComponentFixture<UpdateIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIdeaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
