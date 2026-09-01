import { Component } from '@angular/core';
import { Contacto } from '../../modelo/contacto.modelo';
import { ContactoService } from '../../servicios/contacto-service';

@Component({
  selector: 'app-contactos',
  imports: [],
  templateUrl: './contactos.html',
  styleUrl: './contactos.css',
})
export class Contactos {
  contactos: Contacto[] | null = null;

  constructor(private contactoServicio: ContactoService){}

  ngOnInit(){
    this.contactoServicio.getContactos().subscribe(contactos => {this.contactos = contactos;
    });
  }
}
