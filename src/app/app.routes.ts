import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'cadastro',
    loadComponent: () =>
      import('./pages/cadastro/cadastro.page').then(m => m.CadastroPage)
  },
  {
    path: 'plano',
    loadComponent: () =>
      import('./pages/plano/plano.page').then(m => m.PlanoPage)
  },
  {
    path: 'card-previa',
    loadComponent: () =>
      import('./pages/card-previa/card-previa.page').then(m => m.CardPreviaPage)
  },
  {
    path: 'homenagem',
    loadComponent: () =>
      import('./pages/homenagem/homenagem.page').then(m => m.HomenagemPage)
  }
];
