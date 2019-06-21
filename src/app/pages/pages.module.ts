import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routes';


// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ChartsModule,
    CommonModule
  ]
})


export class PagesModule {}
