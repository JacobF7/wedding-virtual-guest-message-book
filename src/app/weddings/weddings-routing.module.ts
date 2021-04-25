import {WeddingsComponent} from './weddings.component';

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeddingGuestMessagesComponent} from './wedding-guest-messages/wedding-guest-messages.component';

const routes: Routes = [
  {
    path: ':id',
    component: WeddingGuestMessagesComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: WeddingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeddingsRoutingModule {
}
