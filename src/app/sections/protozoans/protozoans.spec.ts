import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Protozoans } from './protozoans';

describe('Protozoans', () => {
  let component: Protozoans;
  let fixture: ComponentFixture<Protozoans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Protozoans],
    }).compileComponents();

    fixture = TestBed.createComponent(Protozoans);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
