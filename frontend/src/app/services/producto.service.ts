import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
 private  URI = "http://localhost:3000/api/producto";

  constructor(private _http:HttpClient) { }

  public postProducto(producto:Producto)
  {
    const options={
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
    }
    const body = JSON.stringify(producto);
  return this._http.post(this.URI,body,options);
  }

  public getDestacados():Observable<any>
  {
    const options = {
      'headers' : new HttpHeaders({})
    }

   return this._http.get(this.URI+"/destacados",options);
  }

  uploadImageToImgBB(imageBase64: string) {
    const url = 'https://api.imgbb.com/1/upload';
    const apiKey = '58e6374caf63921abc74abe0955e99dd';
  
    const formData = new FormData();
    formData.append('image', imageBase64);
  
    const params = {
      expiration: '600',
      key: apiKey
    };
  
    return this._http.post(url, formData, { params });
  }
}
