import { Component } from '@angular/core';
import { Contacto } from '../../modelo/contacto.modelo';
import { ContactoService } from '../../servicios/contacto-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-contacto',
  imports: [FormsModule, RouterLink],
  templateUrl: './editar-contacto.html',
  styleUrl: './editar-contacto.css',
})
export class EditarContacto {

  contacto: Contacto = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: undefined
  }

  id: string | null = null;
  
  constructor(
    private contactoServicio: ContactoService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.contactoServicio.getContacto(this.id).subscribe((contacto: Contacto | null) => {
        if(contacto){
          this.contacto = contacto;
        } else{
          console.log('contacto no encontrado: '+this.id);
          this.router.navigate(['/']);
        }
      });
    } else {
      console.log('No existe id');
      this.router.navigate(['/']);
    }
  }

/*   guardar(contactoForm: NgForm) {
    const {value, valid} = contactoForm;
    if(valid){
      value.id = this.id;
      this.contactoServicio.modificarContacto(value);
      this.router.navigate(['/']);
    }
  } */
 guardar(contactoForm: NgForm){
  if(contactoForm.valid && this.id){
    this.contacto.id = this.id;
    this.contactoServicio.modificarContacto(this.contacto);
    this.router.navigate(['/'])
  }
 }

  eliminar() {
    if(confirm(`¿Seguro que quieres eliminar a: ${this.contacto.nombre}?`)){
      this.contactoServicio.eliminarContacto(this.contacto);
      this.router.navigate(['/']);
    }
  }
}
