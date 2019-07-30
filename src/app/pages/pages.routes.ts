import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard', descripcion: 'Descripcion del Dashboard' } },
      { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress', descripcion: 'Barra de progreso para practica' } },
      { path: 'graphics', component: Graphics1Component, data: { titulo: 'Gráficas', descripcion: 'Graficas de donas y otros componentes' } },
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas', descripcion: 'Uso de promesas para hacer contadores' } },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJS', descripcion: 'Aprendemos como usar rxjs' } },
      { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Settings', descripcion: 'Elige el tema que te guste' } },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild( pagesRoutes )],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
