import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  monedas!:Array<any>;
  cantidad!:number;
  from!:string; 
  to!:string;
  resultado:{conversion:number; moneda:string} ={ conversion: 0, moneda: '' };


  transaccion!:Transaccion;


  constructor(private conversion:TransaccionService, private router:Router) { 


    this.transaccion= new Transaccion();

    this.conversion.getMonedas().subscribe( resultado=> {
      console.log(resultado);
      this.monedas = resultado;
    },
    error=>{
      console.log("error al consumir la api");
    })
  }

  ngOnInit(): void {
  }

  public limpiar()
  {
    if(this.resultado.conversion!=0)
      this.resultado.conversion=0;
  }

  
  public getConversion()
  {
    this.conversion.getConversion(this.transaccion.monedaOrigen, this.transaccion.monedaDestino, this.transaccion.cantidadOrigen).subscribe(resultado=>{
      this.resultado.conversion=resultado.result.convertedAmount;
      this.resultado.moneda= resultado.result.to;
      this.transaccion.cantidadDestino =resultado.result.convertedAmount;
      this.transaccion.tasaConversion = this.transaccion.cantidadDestino / this.transaccion.cantidadOrigen;
      
      this.conversion.postTransaccion(this.transaccion).subscribe(
        result=>
        {
         console.log(result);
        },
        error =>
        {
          console.log(error);
        }
      ); 
      
      console.log(resultado)
    });
  }

  public volver()
  {
    this.router.navigateByUrl("/transacciones");
    
  }
}
