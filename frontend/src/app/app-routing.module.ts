import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // Here we will add our application pages
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    ],
  },
  // { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
