import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarHomenagemPage } from './listar-homenagem.page';

describe('ListarHomenagemPage', () => {
  let component: ListarHomenagemPage;
  let fixture: ComponentFixture<ListarHomenagemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHomenagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
