import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreviaCardPage } from './previa-card.page';

describe('PreviaCardPage', () => {
  let component: PreviaCardPage;
  let fixture: ComponentFixture<PreviaCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviaCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
