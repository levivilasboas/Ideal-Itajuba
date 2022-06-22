import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimulacaoPageRoutingModule } from './simulacao-routing.module';

import { SimulacaoPage } from './simulacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimulacaoPageRoutingModule
  ],
  declarations: [SimulacaoPage]
})
export class SimulacaoPageModule {}
