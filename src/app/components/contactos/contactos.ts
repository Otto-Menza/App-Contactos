import { Component, ElementRef, ViewChild } from '@angular/core';
import { Contacto } from '../../modelo/contacto.modelo';
import { ContactoService } from '../../servicios/contacto-service';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms'

@Component({
  selector: 'app-contactos',
  imports: [ RouterLink, FormsModule ],
  templateUrl: './contactos.html',
  styleUrl: './contactos.css',
})
export class Contactos {
  
  contactos: Contacto[] | null = null;
  contacto: Contacto = {
    nombre:'',
    apellido:'',
    email:'',
    telefono: undefined
  };

  @ViewChild('botonCerrar') botonCerrar!: ElementRef;

  constructor(private contactoServicio: ContactoService){}

  ngOnInit(){
    this.contactoServicio.getContactos().subscribe(contactos => {this.contactos = contactos;
    });
  }

  agregar(contactoForm: NgForm) {
    const {value, valid} = contactoForm;
    if(valid){
      // logica para agregar contacto
      this.contactoServicio.agregarContacto(value)
      //limpiar formulario
      contactoForm.resetForm();
      this.cerrarModal();
    }   
  }
  private cerrarModal(){
    this.botonCerrar.nativeElement.click();
  };

}
