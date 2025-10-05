import { Routes } from '@angular/router';
import { loginGuard } from './guards/login-guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/login/login').then(c => c.Login),
  },
  {
    path: 'home',
    pathMatch: 'full',
    canActivate:[loginGuard],
    loadComponent: () => import('./pages/home/home').then(c => c.Home),
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    canActivate:[loginGuard],
    loadComponent: () => import('./pages/dashboard/dashboard').then(c => c.Dashboard),
  }
];