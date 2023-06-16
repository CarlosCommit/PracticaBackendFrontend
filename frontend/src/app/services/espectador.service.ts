import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {

  URI="http://localhost:3000/api/espectador";
  constructor(private _http:HttpClient) { }

  public getAllEspectador()
  {
    const options ={
      'headers': new HttpHeaders({})
    }
     return this._http.get(this.URI,options);
  }

}
