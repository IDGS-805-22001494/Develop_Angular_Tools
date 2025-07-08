import { Component, OnInit } from '@angular/core';
import { Producto, ProductsService } from '../../services/products.service';
import { FiltersService } from '../../services/filter.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  productos: Producto[] = [];
sinResultados: boolean = false;
terminoBusqueda: string = '';

  constructor(
    private productService: ProductsService,
    private filtersService: FiltersService
  ) {}

  ngOnInit(): void {
   this.cargarTodos();

  this.filtersService.categoriaSeleccionada$.subscribe(id => {
    this.filtrarPorCategoria(id);
  });

  this.filtersService.textoBusqueda$.subscribe(texto => {
    this.buscarPorTexto(texto);
  });
}


cargarTodos() {
  this.productService.getAll().subscribe(data => {
    this.productos = data;
    this.sinResultados = false;
  });
}


  filtrarPorCategoria(id: number) {
  if (id === 0) {
    this.cargarTodos();
  } else {
    this.productService.getByCategoria(id).subscribe(data => {
      this.productos = data;
    });
  }
}

buscarPorTexto(texto: string) {
  this.terminoBusqueda = texto; 
  if (!texto || texto.trim() === '') {
    this.cargarTodos();
    return;
  }

  this.productService.getAll().subscribe(data => {
    const resultado = data.filter(p =>
      p.nombre.toLowerCase().includes(texto.toLowerCase()) ||
      p.descripcion.toLowerCase().includes(texto.toLowerCase()) ||
      p.categoria?.nombre?.toLowerCase().includes(texto.toLowerCase())
    );

    this.productos = resultado;
    this.sinResultados = resultado.length === 0;
  });
}

}
