import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaInicialPage } from './login.page';

describe('PaginaInicialPage', () => {
  let component: PaginaInicialPage;
  let fixture: ComponentFixture<PaginaInicialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaInicialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
