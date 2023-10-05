import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
     path:'login',component:LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: '', redirectTo: '/dashboard/main', pathMatch: 'full'
      },
      {
        path: 'main', loadChildren: () => import('./main/main.module').then(m=>m.MainModule)
      },
      {
        path: 'agregar',loadChildren: () => import('./agregar/agregar.module').then(m=>m.AgregarModule)
      },
      {
        path: 'listar',loadChildren: () => import('./listar/listar.module').then(m=>m.ListarModule)
      },
      {
        path: 'editar',loadChildren: () => import('./editar/editar.module').then(m=>m.EditarModule)
      },
      {
        path:'buscar', loadChildren:() => import('./buscar/buscar.module').then(m=>m.BuscarModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
