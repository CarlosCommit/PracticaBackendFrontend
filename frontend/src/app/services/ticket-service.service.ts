import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';
@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  private URI = "http://localhost:3000/api/ticket"
  constructor(private _http:HttpClient) { }


  //post 
  public createTicket(ticket:Ticket):Observable<any>
  {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json" //Especificamos que es de tipo JSON - PARA CREATE Y UPDATE
      }),
      params: new HttpParams()
    }
    const body = JSON.stringify(ticket);
    console.log(body);
    return this._http.post(this.URI,body,httpOptions);
  }

  //getTickets
  public getTickets(condition?:String):Observable<any>
  {

    if(condition==="l"||condition==='e')
    return this._http.get(this.URI+"/"+condition);

    return this._http.get(this.URI);
  }

  //delete
 
  public deleteTicket(id:String):Observable<any>
  {

 //options
    return this._http.delete(this.URI+"/"+id);
  }

  //getById
  public getTicketById(id:string):Observable<any>
  {

    const options = {
      headers: new HttpHeaders({
        //Especificamos que es de tipo JSON - PARA CREATE Y UPDATE
      })}
    return this._http.get(this.URI+"/id/"+id ,options)
  }

  //update
  public updateTicket(ticket:Ticket):Observable<any>
  {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json" //Especificamos que es de tipo JSON - PARA CREATE Y UPDATE
      }),
      params: new HttpParams()
    }
    const body = JSON.stringify(ticket);
    console.log(body);
    return this._http.put(this.URI,body,httpOptions);
  }

}
