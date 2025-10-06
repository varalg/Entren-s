import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomenagensPage } from './homenagens.page';

describe('HomenagensPage', () => {
  let component: HomenagensPage;
  let fixture: ComponentFixture<HomenagensPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomenagensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
