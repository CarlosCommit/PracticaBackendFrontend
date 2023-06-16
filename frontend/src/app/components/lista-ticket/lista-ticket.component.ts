import { Component, OnInit } from '@angular/core';
import { TicketServiceService } from 'src/app/services/ticket-service.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Ticket } from 'src/app/models/ticket';


@Component({
  selector: 'app-lista-ticket',
  templateUrl: './lista-ticket.component.html',
  styleUrls: ['./lista-ticket.component.css']
})
export class ListaTicketComponent implements OnInit {

  registros!: Array<Ticket>
  filtro: String = "all";



  constructor(private ticketService: TicketServiceService,private toast:ToastrService) {
    this.registros = new Array<Ticket>();
   }

  ngOnInit(): void {
    this.filtrar(this.filtro);

  }

  public filtrar(evento: any): void {
    this.registros=[];
    this.ticketService.getTickets(evento).subscribe(
      result => {
        let ticket = new Ticket();
        result.forEach((element:any)=>
        {
          Object.assign(ticket, element);
          this.registros.push(ticket);
          ticket = new Ticket();
        })
      },
      error => {

      }
    )
  }

  public eliminarTicket(ticket: any): void {


    Swal.fire({
      title: '¿Seguro?',
      text: 'Esto Producto se eliminara',
      icon: 'warning',
      iconColor: "red",
      showCancelButton: true,
      confirmButtonText: 'Sí',
      confirmButtonColor: 'green' ,
      cancelButtonText: 'Cancelar'
    }).then((result) => {

      if (result.isConfirmed) {
      
        this.ticketService.deleteTicket(ticket._id).subscribe(
          result=>
          {
            this.toast.success("Producto Eliminado Correctamente");
            this.filtrar(this.filtro);
          },
          error =>
          {
            this.toast.error("No se pudo eliminar, intentelo mas tarde")
          }
        );
      
     
       
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("no confirmo")
        
      }
    });

  }

}
