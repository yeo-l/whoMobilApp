import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletudePageRoutingModule } from './completude-routing.module';

import { CompletudePage } from './completude.page';
import {ChartsModule} from "ng2-charts";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    CompletudePageRoutingModule
  ],
  declarations: [CompletudePage]
})
export class CompletudePageModule {}
