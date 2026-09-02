import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../modelo/contacto.modelo';
import { collection, collectionData, Firestore, orderBy, query, CollectionReference, docData } from '@angular/fire/firestore';
import { addDoc, doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  contactos: Observable<Contacto[]>;
  private contactosRef: CollectionReference<Contacto>;
  constructor(private firestore: Firestore){
    //Realizamos la consulta para obtener el listdo de contactos
    this.contactosRef = collection(this.firestore, 'contactos');
    const consulta = query(this.contactosRef, orderBy('nombre', 'asc'));
    this.contactos = collectionData(consulta, {idField: 'id'}) as Observable<Contacto[]>;
  }

  getContactos(): Observable<Contacto[]>{
    return this.contactos;
  }

  agregarContacto(contacto: Contacto){
    return addDoc(this.contactosRef, contacto);
  }

  getContacto(id: string): Observable<Contacto | null>{
    const contactoRefDoc = doc(this.firestore, `contactos/${id}`);
    return docData(contactoRefDoc, {idField: 'id'}) as Observable<Contacto>;
  }
}
