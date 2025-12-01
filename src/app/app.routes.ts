import { Routes } from '@angular/router';

export const routes: Routes = [
  // Página inicial
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },

  // Login e Cadastro
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/Login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'cadastro',
    loadComponent: () =>
      import('./cadastro/cadastro.page').then((m) => m.CadastroPage),
  },

  // MenuLayout com páginas internas
  {
    path: 'menu-layout',
    loadComponent: () =>
      import('./pages/menu-layout/menu-layout.page').then(
        (m) => m.MenuLayoutPage
      ),
    children: [
      {
        path: 'listar-homenagem',
        loadComponent: () =>
          import('./pages/listar-homenagem/listar-homenagem.page').then(
            (m) => m.ListarHomenagensPage
          ),
      },
      {
        path: 'escolher-homenagem',
        loadComponent: () =>
          import('./escolher-homenagem/escolher-homenagem.page').then(
            (m) => m.EscolherHomenagemPage
          ),
      },

      // Lista de homenagens prontas
      {
        path: 'homenagens',
        loadComponent: () =>
          import('./homenagens/homenagens.page').then(
            (m) => m.HomenagensPage
          ),
      },

      // Personalização = Previa Card ✔️
      {
        path: 'previa-card',
        loadComponent: () =>
          import('./previa-card/previa-card.page').then(
            (m) => m.PreviaCardPage
          ),
      },

      // Política de privacidade dentro do menu
      {
        path: 'politica-privacidade',
        loadComponent: () =>
          import('./pages/politica-privacidade/politica-privacidade.page').then(
            (m) => m.PoliticaPrivacidadePage
          ),
      },

      // Rota padrão
      {
        path: '',
        redirectTo: 'listar-homenagem',
        pathMatch: 'full',
      },
    ],
  },
];
