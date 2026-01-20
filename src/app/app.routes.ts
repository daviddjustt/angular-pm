import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { RequerimentoComponent } from './features/requerimento/requerimento';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  // Rota padrão: redireciona para o login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Tela de Login
  { path: 'login', component: LoginComponent },

  // Tela de Requerimento protegida pelo Guard
  {
    path: 'requerimento',
    component: RequerimentoComponent,
    canActivate: [authGuard]
  },

  // Wildcard: qualquer rota inexistente volta para o login
  { path: '**', redirectTo: 'login' }
];
