import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../modelo/contacto.modelo';
import { collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  contactos: Observable<Contacto[]>;

  constructor(private firestore: Firestore){
    //Realizamos la consulta para obtener el listdo de contactos
    const contactosRef = collection(this.firestore, 'contactos');
    const consulta = query(contactosRef, orderBy('nombre', 'asc'));
    this.contactos = collectionData(consulta, {idField: 'id'}) as Observable<Contacto[]>;
  }

  getContactos(): Observable<Contacto[]>{
    return this.contactos;
  }
}
