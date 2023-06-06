import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/users/create', pathMatch: 'full' },
  {
    path: 'users' , loadChildren:()=>import('./user/user.module')
    .then(modulee=>modulee.UserModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
