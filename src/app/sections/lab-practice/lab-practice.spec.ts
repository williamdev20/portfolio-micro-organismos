import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabPractice } from './lab-practice';

describe('LabPractice', () => {
  let component: LabPractice;
  let fixture: ComponentFixture<LabPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabPractice],
    }).compileComponents();

    fixture = TestBed.createComponent(LabPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
