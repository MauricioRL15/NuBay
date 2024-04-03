import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneraFacturaComponentComponent } from './components/genera-factura-component/genera-factura-component.component';
import { ConsultaFacturaComponentComponent } from './components/consulta-factura-component/consulta-factura-component.component';
import { ManualComponentComponent } from './components/manual-component/manual-component.component';
import { HomeComponent } from './components/home/home.component';
import { GeneraFacturaGlobalComponent } from './components/genera-factura-component/genera-factura-global/genera-factura-global.component';
import { ConsultaFacturaGlobalComponent } from './components/consulta-factura-component/consulta-factura-global/consulta-factura-global.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'genera', component:GeneraFacturaComponentComponent},
  {path: 'consulta', component:ConsultaFacturaComponentComponent},
  {path: 'consultaGlobal', component:ConsultaFacturaGlobalComponent},
  {path: 'manual', component:ManualComponentComponent},
  {path: 'home', component:HomeComponent},
  {path: 'generaGlobal', component:GeneraFacturaGlobalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
