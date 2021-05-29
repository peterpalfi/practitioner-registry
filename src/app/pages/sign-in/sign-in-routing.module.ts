import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in.component';

const routes: Routes = [{ path: '', component: SignInComponent, data: { title: 'Sign in - PractitionerRegistry' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
