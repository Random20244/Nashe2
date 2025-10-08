import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { FavoritoService } from '../../servicio/favorito.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Productos } from '../../modelos/produc.model';

@Component({
  selector: 'app-favorito',
  imports: [CommonModule,RouterModule],
  templateUrl: './favorito.component.html',
  styleUrl: './favorito.component.css'
})
export class FavoritoComponent {
constructor(private CarritoService: CarritoService, private FavoritoService:FavoritoService){};
  
  productosEnFavorito:{productos:Productos}[] = [];
 
  ngOnInit(): void{
    this.FavoritoService.favorito$.subscribe((productos)=>{
      this.productosEnFavorito=productos
    })
  }
  
  agregar(productos:Productos, productosId:number){
    this.CarritoService.agregarAlCarrito(productos)
    alert('Se agrego al carrito ´•ω•̥`')
    this.FavoritoService.eliminarFavorito(productosId)    
  };
  
  quitarFavorito(productosId:number){
    this.FavoritoService.eliminarFavorito(productosId)
    alert('Se ah quitado de sus favoritos T⌓T')
  };

}
