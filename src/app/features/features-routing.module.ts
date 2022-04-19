import { AuthGuard } from './../core/helpers/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Role } from '../core/models/role';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard], data: {roles: [Role.Admin]}},
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
