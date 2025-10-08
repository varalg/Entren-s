import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardPreviaPage } from './card-previa.page';

describe('CardPreviaPage', () => {
  let component: CardPreviaPage;
  let fixture: ComponentFixture<CardPreviaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPreviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
