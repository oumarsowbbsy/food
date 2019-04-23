import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LagondolePage } from './lagondole.page';

describe('LagondolePage', () => {
  let component: LagondolePage;
  let fixture: ComponentFixture<LagondolePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LagondolePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LagondolePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
