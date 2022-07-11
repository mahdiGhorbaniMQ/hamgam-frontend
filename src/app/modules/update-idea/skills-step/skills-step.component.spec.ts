import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsStepComponent } from './skills-step.component';

describe('SkillsStepComponent', () => {
  let component: SkillsStepComponent;
  let fixture: ComponentFixture<SkillsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
