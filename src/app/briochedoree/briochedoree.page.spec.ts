import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BriochedoreePage } from './briochedoree.page';

describe('BriochedoreePage', () => {
  let component: BriochedoreePage;
  let fixture: ComponentFixture<BriochedoreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BriochedoreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriochedoreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
