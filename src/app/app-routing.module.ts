import { AuthGuard } from './core/helpers/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesModule } from './features/features.module';

const routes: Routes = [
  { path: '', redirectTo:'auth', pathMatch:'full'},
  { path: 'auth', loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule)},
  { path: 'features', loadChildren: () => FeaturesModule, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'auth'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
