import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/Login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  {
    path: 'homenagens',
    loadComponent: () => import('./homenagens/homenagens.page').then( m => m.HomenagensPage)
  },
  {
    path: 'plano',
    loadComponent: () => import('./plano/plano.page').then( m => m.PlanoPage)
  },
  {
    path: 'previa-card',
    loadComponent: () => import('./previa-card/previa-card.page').then( m => m.PreviaCardPage)
  },
  {
    path: 'escolher-homenagem',
    loadComponent: () => import('./escolher-homenagem/escolher-homenagem.page').then( m => m.EscolherHomenagemPage)
  },


  
];
