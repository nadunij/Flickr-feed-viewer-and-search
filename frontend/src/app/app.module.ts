import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from "./ui/header/header.component";
import { ContainerComponent } from './ui/container/container.component';
// import { LayoutComponent } from './ui/layout/layout.component';
// import { LoadComponent } from './utils/load/load.component';
// import { SearchResultsComponent } from './pages/search-results/search-results.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    // LayoutComponent,
    // LoadComponent,
    // SearchResultsComponent,
    routingComponents,
    ContainerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
