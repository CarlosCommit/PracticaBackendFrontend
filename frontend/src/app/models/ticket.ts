import { Espectador } from "./espectador";

export class Ticket {
    _id!:number;
    precioTicket!:number;
    categoriaEspectador!:string;
    fechaCompra!:string;
    espectador!:Espectador;

   /* constructor(dni:string,precioReal:number,tipo:string,precioCobrado:number)
    {
        this.id=0;
        this.dni=dni;
        this.precioReal=precioReal;
        this.tipo=tipo;
        this.fechaCobro=new Date();
        this.precioCobrado=precioCobrado;
        
    }*/
    constructor()
    {
        
    }
}
