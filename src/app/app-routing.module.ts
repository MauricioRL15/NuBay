import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneraFacturaComponentComponent } from './components/genera-factura-component/genera-factura-component.component';
import { ConsultaFacturaComponentComponent } from './components/consulta-factura-component/consulta-factura-component.component';
import { ManualComponentComponent } from './components/manual-component/manual-component.component';


const routes: Routes = [
  {path:'', redirectTo: '', pathMatch: 'full'},
  {path: '', component:GeneraFacturaComponentComponent},
  {path: 'consulta', component:ConsultaFacturaComponentComponent},
  {path: 'manual', component:ManualComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
