import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-list-transaccion',
  templateUrl: './list-transaccion.component.html',
  styleUrls: ['./list-transaccion.component.css']
})
export class ListTransaccionComponent implements OnInit {

  transacciones!:Array<Transaccion>;
  monedas!:Array<any>;
  desde!:string; 
  hacia!:string;
  limpia:boolean =false;
  constructor(private transaccionService:TransaccionService) { 
    this.transacciones = new Array<Transaccion>(); 
  }

  ngOnInit(): void {

   this.getAllTransacciones();
   this.getMonedas();
  }


  public getMonedas()
  {

    this.transaccionService.getMonedas().subscribe(
      result=>{
        this.monedas=result;
      },
      error=>{

      }
    );
  }

  public getAllTransacciones()
  {
    this.transaccionService.getTransacciones().subscribe(
      (result) => {
        this.transacciones=[];
        let transaccion = new Transaccion();
        result.forEach((element:any) => {
        Object.assign(transaccion, element);
        this.transacciones.push(transaccion);
        transaccion = new Transaccion();
       });
      },
      (error) => { console.log(error) }
    )
  }

  public verificar()
  {
    console.log("entra")
    console.log(this.desde);
    console.log(this.hacia); 
    if(this.desde!=="" && this.hacia!=="" && this.desde!= undefined && this.hacia!= undefined)
    {
      this.limpia=true;
      this.transaccionService.getTransaccionByOrigenDestino(this.desde, this.hacia).subscribe(
        result => {
          this.transacciones = [];
          console.log("se trajo nueva lista");
          console.log(result);
          let transaccion = new Transaccion();
          result.forEach((element:any) => {
            Object.assign(transaccion, element);
            this.transacciones.push(transaccion);
            transaccion = new Transaccion();
          })
        },
        error => { 
           }
      )

    }
  }

  public limpiarFiltro(){
    this.limpia=false;
    this.desde="";
    this.hacia="";
    this.getAllTransacciones();
  }

 
}
