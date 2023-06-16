import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espectador'
})
export class EspectadorPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
 
    let tipo="";
   
    if(value==="l")
      tipo="Local";
    else if(value==="e")
      tipo="Extranjero";

    return tipo;
 
  

  }

}
