import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ParentesBuscaComponent } from './components/parentes-busca/parentes-busca.component';
import { InspecionarParentesComponent } from './components/pages/inspecionar-parentes/inspecionar-parentes.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"inspecionar/:_id",component:InspecionarParentesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
