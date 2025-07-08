import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Categoria {
  id: number;
  nombre: string;
}

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
  categoriaId: number;
  categoria: Categoria;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://localhost:7006/api/Productos'; // Ajusta si usas otro puerto

  constructor(private http: HttpClient) { }

  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  getById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  getByCategoria(categoriaId: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/categoria/${categoriaId}`);
  }
}
