import { ExcluirComponent } from './components/excluir/excluir.component';
import { EditarComponent } from './components/editar/editar.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AdicionarComponent } from './components/adicionar/adicionar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UsuarioComponent},
  { path: "adicionar",component: AdicionarComponent},
  { path: "usuario",component: UsuarioComponent},
  { path: "editar/:id",component: EditarComponent},
  { path: "excluir/:id",component: ExcluirComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
