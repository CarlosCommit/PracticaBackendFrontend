import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos!:Array<any>;  

  constructor(private productoService:ProductoService) {
   }

  ngOnInit(): void {
    this.productoService.getDestacados().subscribe(
      result=>
      {
         console.log(result);
         this.productos = result;
      },
      error=>
      {

      }
    )
  }

}
