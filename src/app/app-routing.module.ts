import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgenciasListComponent } from './agencias-list/agencias-list.component';
import { FormAgenciaComponent } from './form-agencia/form-agencia.component';
import { SpinnerComponent } from './spinner/spinner.component';


const routes: Routes = [
  { path: '', redirectTo: 'spinner', pathMatch: 'full' },
  { path: 'spinner', component: SpinnerComponent },
  { path: 'listAgencia', component: AgenciasListComponent },
  { path: 'agencia/:id', component: FormAgenciaComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
