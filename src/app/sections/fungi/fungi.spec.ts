import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fungi } from './fungi';

describe('Fungi', () => {
  let component: Fungi;
  let fixture: ComponentFixture<Fungi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fungi],
    }).compileComponents();

    fixture = TestBed.createComponent(Fungi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
