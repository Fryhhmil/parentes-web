import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PrincipalComponent } from './components/principal/principal.component';
import {FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ParentesBuscaComponent } from './components/parentes-busca/parentes-busca.component';
import { InspecionarParentesComponent } from './components/pages/inspecionar-parentes/inspecionar-parentes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrincipalComponent,
    ParentesBuscaComponent,
    InspecionarParentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
