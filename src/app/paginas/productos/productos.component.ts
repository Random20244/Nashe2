import { Component } from '@angular/core';
import { NgFor} from '@angular/common';
import { Producto } from '../../modelos/produc.model';
import { CarritoService } from '../../servicio/carrito.service';

@Component({
  selector: 'app-productos',
  imports: [NgFor],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos=[
    {id: 1,nombre: 'Producto 1', precio:100, imagen:'https://img.freepik.com/psd-gratis/gato-aislado-fondo-blanco_23-2151133768.jpg?semt=ais_hybrid&w=740'},
    {id: 2,nombre: 'Producto 2', precio:150, imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgjkeMnLMn_c-d5XRoo9_1YUaMJsZ9j5Lj_w&s'},
    {id: 3,nombre: 'Producto 3', precio:200, imagen:'https://media.tenor.com/9ZUkx0LZCvoAAAAM/cats-cat.gif'}
  ];
  Productos: Producto[]=[]

  constructor(private carritoService: CarritoService){}
  //metodo para agregar un producto al carrito
  agregar(producto: Producto){
    this.carritoService.agregarAlCarrito(producto)
    alert('Producto agregado al carrito') //muestra el mensaje
  } 
}
