import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ListaPage } from '../lista/lista.page';
import { FavoritosPage } from '../favoritos/favoritos.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children:[
          {
          path:'',
        loadChildren: () => import('../lista/lista.module').then(m => m.ListaPageModule)
         },
        {
          path:':id/:name',
        loadChildren: () => import('../estadisticas/estadisticas.module').then(m => m.EstadisticasPageModule)
        }
      ]
      },
      {
        path: 'tab2',
        loadChildren: () => import('../favoritos/favoritos.module').then(m => m.FavoritosPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
