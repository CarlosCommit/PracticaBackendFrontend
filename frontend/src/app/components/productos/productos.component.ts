import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos!:Array<Producto>; 
  
  filtro!:string;

  constructor(private productoService:ProductoService) {
    this.getDestacados();
    this.filtro="destacados";
   }

  ngOnInit(): void {
    
  }

  public getDestacados()
  {
    this.productos=[];
    this.productoService.getDestacados().subscribe(
      result=>
      {
         let producto = new Producto();
         console.log(result);
         result.forEach((element:any) => {
          Object.assign(producto,element); 
          this.productos.push(producto);
          producto=new Producto();
         });
      },
      error=>
      {

      }
    )
  }

  public getAllProductos()
  {
    console.log("se entra")
    this.productos=[];
    this.productoService.getAllProductos().subscribe(
      result=>
      {
         let producto = new Producto();
         console.log(result);
         result.forEach((element:any) => {
          Object.assign(producto,element); 
          this.productos.push(producto);
          producto=new Producto();
         });
      },
      error=>
      {

      }
    )

  }

  filtrar(event:any)
  {
    console.log("evento:" + event)
    if(event==="all")
    {
      console.log("igual")
       this.getAllProductos();
    }else
    {
      this.getDestacados();
    }
   
    

  }

}
