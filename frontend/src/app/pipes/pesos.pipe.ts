import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'pesos'
})
export class PesosPipe implements PipeTransform {

  transform(value: number): string {
    // Verificar si el valor no es numérico o es nulo
    if (isNaN(value) || value === null) {
      return '';
    }

    // Formatear el número con separador de miles y decimales
    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    });

    return formatter.format(value);
  }

}
