import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCom2Component } from './new-com2.component';

describe('NewCom2Component', () => {
  let component: NewCom2Component;
  let fixture: ComponentFixture<NewCom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCom2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
