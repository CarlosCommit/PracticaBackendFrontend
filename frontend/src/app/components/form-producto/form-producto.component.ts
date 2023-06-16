import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {
  
  producto!:Producto;
  img64!:string;
  constructor(private toast:ToastrService,private domSanitizer: DomSanitizer, private productoService:ProductoService) {
    this.producto = new Producto();
   }
  


  ngOnInit(): void {
  }

  
  public registrar():void
  {

    Swal.fire({
      title: '¿Seguro?',
      text: 'Esto Producto se registrara',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      confirmButtonColor: 'green' ,
      cancelButtonText: 'Cancelar'
    }).then((result) => {

      if (result.isConfirmed) {
        console.log("confirmo")
        

        
        // this.productoService.postProducto(this.producto).subscribe(
        //   result=>
        //   {

        //     this.toast.success("Producto Registrado Correctamente")

        //   },
        //   error=>
        //   {



         // }
       // )


       this.productoService.uploadImageToImgBB(this.img64).subscribe(
        result=>
        {
          console.log(result);
        },
        error=>
        {
          console.log(error);
        }
        
       )

     
       
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("no confirmo")
        
      }
    });


  
  

}

onFileSelected(event: any) {
  console.log("entro");
  const file = event.target.files[0];
  const reader = new FileReader();
  
  reader.onloadend = () => {
    const imageString = reader.result as string;
    // Aquí puedes hacer algo con la cadena codificada en base64, como enviarla a tu API para guardarla en MongoDB.
    this.img64= imageString;
    console.log(this.img64)
  };
  
  reader.readAsDataURL(file); 
  }
  
}


