import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

 private URI:string = "http://localhost:3000/api/transaccion"; 

  constructor(private _http:HttpClient) { 
    
  }

  public postTransaccion(transaccion:Transaccion)
  {
    const options={
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
    }
    const body = JSON.stringify(transaccion);
  return this._http.post(this.URI,body,options);
  }

  public getMonedas():Observable<any>
  {
    const options={
      headers: {
        'X-RapidAPI-Key': '31791ffadbmshe76f2574ff1c4fbp1ca83djsnd1927962281e',
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
      }
    }
  return this._http.get('https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies', options);
  }


  public getTransacciones():Observable<any>
  {

    return this._http.get(this.URI);
    
  }

  public getConversion(from:string, to:string, amount:number):Observable<any>
  {
    const options={
      headers: {
        'X-RapidAPI-Key': '31791ffadbmshe76f2574ff1c4fbp1ca83djsnd1927962281e',
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
      },
      params:{

        from: from,
        to: to,
        amount: amount

      }
    }
  return this._http.get('https://currency-converter18.p.rapidapi.com/api/v1/convert', options);
  }


  
  public getTransaccionByOrigenDestino(origen:string, destino:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({
       
      }),
      params: new HttpParams()
      .set('origen', origen)
      .set('destino',destino)
    }
    return this._http.get(this.URI+'/origenDestino/filter', options);
  }

}
