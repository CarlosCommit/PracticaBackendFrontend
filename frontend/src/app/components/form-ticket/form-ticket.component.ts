import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { EspectadorService } from 'src/app/services/espectador.service';
import { Espectador } from 'src/app/models/espectador';
import { TicketServiceService } from 'src/app/services/ticket-service.service';
@Component({
  selector: 'app-form-ticket',
  templateUrl: './form-ticket.component.html',
  styleUrls: ['./form-ticket.component.css']
})
export class FormTicketComponent implements OnInit {
  accion!:String; 
  ticket!:Ticket
  espectadores!:Array<Espectador>;

  constructor(private router:Router,private activedRouter:ActivatedRoute,private toast:ToastrService, private espectadorService:EspectadorService, private ticketService:TicketServiceService) { 
    this.ticket=new Ticket();
    this.espectadores = new Array<Espectador>();
  }

  ngOnInit(): void {
    this.activedRouter.params.subscribe(params=>{
        
      if(params['id']==0){  
      this.accion="new"; 
      this.ticket.fechaCompra = new Date().toISOString().substr(0, 10);
      }
      else
      {
        this.accion="edit";
       this.cargarTicket(params['id']);
      }
      
    })
  }

  public getEspectadores()
  {
    this.espectadorService.getAllEspectador().subscribe(
      (result:any)=>
      {
        let espectador = new Espectador();
        result.forEach((element:any) => {
          Object.assign(espectador, element);
          this.espectadores.push(espectador);
          espectador = new Espectador();
        });
      },
      error=>
      {

      }
    )
  }

  public cargarTicket(id:string)
  {
    this.ticketService.getTicketById(id).subscribe(
      result=>{
        //cargo ticket
        Object.assign(this.ticket, result);
        //cargo espectadores
        this.espectadorService.getAllEspectador().subscribe(
          (result:any)=>
          {
            let espectador = new Espectador();
            result.forEach((element:any) => {
              Object.assign(espectador, element);
              this.espectadores.push(espectador);
              espectador = new Espectador();
            });

            this.ticket.espectador = this.espectadores.find(espectador=> espectador._id === this.ticket.espectador._id)!;

          },
          error=>
          {
    
          }
        )

      },
      error=>
      {

      }
    )
  }

  public guardar()
  {
    

    Swal.fire({
      title: '¿Seguro?',
      text: 'Se guardara',
      icon: 'info',
      iconColor: "red",
      showCancelButton: true,
      confirmButtonText: 'Sí',
      confirmButtonColor: 'green' ,
      cancelButtonText: 'Cancelar'
    }).then((result) => {

      if (result.isConfirmed) {
        console.log("confirmo")
         this.ticketService.createTicket(this.ticket).subscribe(
          result=>
          {
            this.toast.success("Guardado correctamente");
            this.router.navigateByUrl("tickets");
          },
          error=>
          {
            this.toast.error("Algo salio mal, intentelo nuevamente")
          }
         )
        
        //
       
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("no confirmo")
        
      }
    });
  }

  public editar()
  {
    Swal.fire({
      title: '¿Seguro?',
      text: 'Esto Producto se editara',
      icon: 'info',
      iconColor: "red",
      showCancelButton: true,
      confirmButtonText: 'Sí',
      confirmButtonColor: 'green' ,
      cancelButtonText: 'Cancelar'
    }).then((result) => {

      if (result.isConfirmed) {
        this.ticketService.updateTicket(this.ticket).subscribe(result=>{
          this.toast.success("Editado correctamente");
          this.router.navigateByUrl("tickets");
        },
        error=>
        {
          this.toast.error("Surgio un error intentelo nuevamente mas tarde ")
        });
      
       
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("no confirmo")
        
      }
    });
  }
  
  }


