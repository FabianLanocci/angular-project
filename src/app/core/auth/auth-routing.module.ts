import { AuthGuard } from './../helpers/auth.guard';
import { FeaturesComponent } from './../../features/features.component';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    component: AuthComponent,
    children: [{
      path: '',
      component: LoginComponent
    },
    {
      path: 'features',
      component: FeaturesComponent,
      canActivate: [AuthGuard]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
