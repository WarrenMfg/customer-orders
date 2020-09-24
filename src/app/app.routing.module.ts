import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/customers' }, // root path
  { path: 'orders/:id', pathMatch: 'full', redirectTo: '/orders/:id' },
  { path: '**', pathMatch: 'full', redirectTo: '/customers' } // wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
