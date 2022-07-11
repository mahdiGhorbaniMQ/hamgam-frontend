import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribersStepComponent } from './subscribers-step.component';

describe('SubscribersStepComponent', () => {
  let component: SubscribersStepComponent;
  let fixture: ComponentFixture<SubscribersStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribersStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribersStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
