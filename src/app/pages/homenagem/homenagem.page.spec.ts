import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomenagemPage } from './homenagem.page';

describe('HomenagemPage', () => {
  let component: HomenagemPage;
  let fixture: ComponentFixture<HomenagemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomenagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
