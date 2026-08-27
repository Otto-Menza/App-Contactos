import { Component, signal } from '@angular/core';
import { Cabecero } from './components/cabecero/cabecero';
import { RouterOutlet } from '@angular/router';
import { PieDePagina } from './components/pie-de-pagina/pie-de-pagina';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecero, PieDePagina],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-contactos');
}
