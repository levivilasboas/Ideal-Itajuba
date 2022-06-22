import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimulacaoPage } from './simulacao.page';

const routes: Routes = [
  {
    path: '',
    component: SimulacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulacaoPageRoutingModule {}
