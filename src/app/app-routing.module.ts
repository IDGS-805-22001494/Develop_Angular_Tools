import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

const routes: Routes = [
  { path: 'productos', component: ListProductsComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: StartComponent },
  { path: '**', redirectTo: '/inicio' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
