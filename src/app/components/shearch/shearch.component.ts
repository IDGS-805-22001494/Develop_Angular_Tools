import { Component } from '@angular/core';
import { FiltersService } from '../../services/filter.service';

@Component({
  selector: 'app-shearch',
  templateUrl: './shearch.component.html',
  styleUrls: ['./shearch.component.css']
})
export class ShearchComponent {

 terminoBusqueda: string = '';

  constructor(private filtersService: FiltersService) {}

  seleccionarCategoria(id: number) {
    this.filtersService.seleccionarCategoria(id);
  }

  buscarProductos() {
    this.filtersService.seleccionarTexto(this.terminoBusqueda);
  }
  seleccionarTodas() {
  this.filtersService.seleccionarCategoria(0); 
}

}
