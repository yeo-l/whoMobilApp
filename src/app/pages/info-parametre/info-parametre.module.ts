import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoParametrePageRoutingModule } from './info-parametre-routing.module';

import { InfoParametrePage } from './info-parametre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoParametrePageRoutingModule
  ],
  declarations: [InfoParametrePage]
})
export class InfoParametrePageModule {}
