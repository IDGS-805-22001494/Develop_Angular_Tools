import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  private categoriaSeleccionadaSource = new Subject<number>();
  categoriaSeleccionada$ = this.categoriaSeleccionadaSource.asObservable();
private textoBusquedaSource = new Subject<string>();
textoBusqueda$ = this.textoBusquedaSource.asObservable();

seleccionarTexto(texto: string) {
  this.textoBusquedaSource.next(texto);
}

  seleccionarCategoria(id: number) {
    this.categoriaSeleccionadaSource.next(id);
  }
}
