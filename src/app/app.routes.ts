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
    path: 'gestionpublicacion',
    loadComponent: () => import('./gestionpublicacion/gestionpublicacion.page').then( m => m.GestionpublicacionPage)
  },
  {
    path: 'modal1',
    loadComponent: () => import('./modal1/modal1.page').then( m => m.Modal1Page)
  },
];
