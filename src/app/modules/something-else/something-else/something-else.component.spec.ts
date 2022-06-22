import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingElseComponent } from './something-else.component';

describe('SomethingElseComponent', () => {
  let component: SomethingElseComponent;
  let fixture: ComponentFixture<SomethingElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomethingElseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomethingElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
