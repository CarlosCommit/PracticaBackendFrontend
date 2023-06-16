import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormProductoComponent } from './components/form-producto/form-producto.component'
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormTicketComponent } from './components/form-ticket/form-ticket.component';
import { ListaTicketComponent } from './components/lista-ticket/lista-ticket.component';
import { ListTransaccionComponent } from './components/list-transaccion/list-transaccion.component';
import { ConversionComponent } from './components/conversion/conversion.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductosComponent,
    FormProductoComponent,
    FormTicketComponent,
    ListaTicketComponent,
    ListTransaccionComponent,
    ConversionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        positionClass: 'toast-bottom-right'
      }
    ),
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
