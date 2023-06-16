import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';
import { ListaTicketComponent } from './components/lista-ticket/lista-ticket.component';
import { FormTicketComponent } from './components/form-ticket/form-ticket.component';
import { ListTransaccionComponent } from './components/list-transaccion/list-transaccion.component';
import { ConversionComponent } from './components/conversion/conversion.component';

const routes: Routes = [
  {path:"", pathMatch:'full',redirectTo:"productos"},
  {path:"productos", component: ProductosComponent},
  {path:"formulario", component: FormProductoComponent},
  {path:"tickets", component:ListaTicketComponent},
  {path:"formTicket/:id", component:FormTicketComponent},
  {path:"transacciones" , component:ListTransaccionComponent},
  {path:"formTransaccion", component:ConversionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
