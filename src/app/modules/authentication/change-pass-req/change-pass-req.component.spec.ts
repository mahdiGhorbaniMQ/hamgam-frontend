import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassReqComponent } from './change-pass-req.component';

describe('ChangePassReqComponent', () => {
  let component: ChangePassReqComponent;
  let fixture: ComponentFixture<ChangePassReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePassReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePassReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
