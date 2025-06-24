import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './sec-info/info/info.component';



const routes: Routes = [
  { path: 'info', component:InfoComponent},
  { path: 'inicio', component:InicioComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path:'**', component:InicioComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
