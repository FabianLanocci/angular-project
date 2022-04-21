import { AuthGuard } from './core/helpers/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'auth', pathMatch:'full'},
  { path: 'auth', loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule)},
  { path: 'features', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule), canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'auth'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
