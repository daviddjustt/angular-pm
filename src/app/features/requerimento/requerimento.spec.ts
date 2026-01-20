import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Requerimento } from './requerimento';

describe('Requerimento', () => {
  let component: Requerimento;
  let fixture: ComponentFixture<Requerimento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Requerimento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Requerimento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
