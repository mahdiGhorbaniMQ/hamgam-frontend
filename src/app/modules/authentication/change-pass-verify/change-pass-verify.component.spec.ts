import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassVerifyComponent } from './change-pass-verify.component';

describe('ChangePassVerifyComponent', () => {
  let component: ChangePassVerifyComponent;
  let fixture: ComponentFixture<ChangePassVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePassVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePassVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
