import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'easybank',
    loadChildren: () =>
      import('./easybank/easybank.module').then((m) => m.EasybankModule),
  },
  {
    path: '',
    redirectTo: '/easybank',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
