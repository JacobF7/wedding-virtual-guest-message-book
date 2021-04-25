import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'weddings',
    loadChildren: () => import('./weddings/weddings.module').then(m => m.WeddingsModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'weddings'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
