import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaSuggestionComponent } from './idea-suggestion.component';

describe('IdeaSuggestionComponent', () => {
  let component: IdeaSuggestionComponent;
  let fixture: ComponentFixture<IdeaSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaSuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
