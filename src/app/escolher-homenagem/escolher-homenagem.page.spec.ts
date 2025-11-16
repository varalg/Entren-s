import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscolherHomenagemPage } from './escolher-homenagem.page';

describe('EscolherHomenagemPage', () => {
  let component: EscolherHomenagemPage;
  let fixture: ComponentFixture<EscolherHomenagemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolherHomenagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
