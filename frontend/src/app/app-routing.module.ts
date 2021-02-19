import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'search', component: SearchResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SearchResultsComponent]
