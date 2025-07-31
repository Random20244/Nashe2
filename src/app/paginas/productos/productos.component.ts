import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Producto } from '../../modelos/produc.model';
import { CarritoService } from '../../servicio/carrito.service';
import { RouterModule } from '@angular/router';
import { FavoritoService } from '../../servicio/favorito.service';

@Component({
  selector: 'app-productos',
  imports: [CommonModule,RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
 
Productos: Producto []=[
  {id: 1 ,
    nombre:'Gato con Lentes' ,
    descripcion:"Un gato que lleva puesto unos lentes, lo hacen ver muy atractivo, posando para fotos y videos que luego seran memes, +10000000 de aura y God." ,
    precio:12570.00 ,
    disponibilidad:true ,
    imagen:'https://img.freepik.com/psd-gratis/gato-aislado-fondo-blanco_23-2151133768.jpg?semt=ais_hybrid&w=740', 
    categoria:"",
    marca:""},
  {id: 2 ,
    nombre:'Gato Solitario' ,
    descripcion:"Un gato que lo dejaron por otro gato,o simplemnte le gusta posar de esa manera, nadie sabe, solo él y el tiempo lo diran." ,
    precio:12200.00 ,
    disponibilidad:true ,
    imagen:"https://preview.redd.it/some-silly-cat-memes-v0-kjvhq9ip0o5a1.jpg?width=640&crop=smart&auto=webp&s=084994fae37d5be1fab5c628ca5ab9df312e7b9b",
    categoria:"",
    marca:""},
  {id: 3 ,
    nombre:'Gato Guaton' ,
    descripcion:"Un gato muy regordete, jefe de los mininos y debodaror de wiska, es muy fuerte y muy pesado superando a toda raza felina." ,
    precio:35000.00 ,
    disponibilidad:true ,
    imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMaTgCiYMxeqiFz0KlzaEgqc0cYr0ztFGSsA&s',
    categoria:"",
    marca:""},
  {id: 4 ,
    nombre:'Gato Dance' ,
    descripcion:"Un gato que le gusta mucho danzar(a pesar de que sea un gato y no sea natural), cuanta con muy buen estilo de baile, Comico." ,
    precio:15000.00 ,
    disponibilidad:true ,
    imagen:'https://us-tuna-sounds-images.voicemod.net/2c08d5ee-b180-4163-b061-59e48eeea633-1709373139533.png',
    categoria:"",
     marca:""},
  {id: 5 ,
    nombre:'Gato?' ,
    descripcion:"Un michi que sin duda tuvo una de los cambios mas notorios en su cuerpo, razones o causas son desconocidas,solo no lo moleste." ,
    precio:367840.00 ,
    disponibilidad:true ,
    imagen:'https://i.pinimg.com/474x/fa/9d/47/fa9d47de28f63d6faf88944ef3231dbd.jpg',
    categoria:"",
    marca:""},
  {id: 6 ,
    nombre:'Gato...?' ,
    descripcion:"Hermano del anterior 'gato?' solo que tuvo piernas humanoides a que todo completo como su hermano,cuidado si lo ves." ,
    precio:437859.15 ,
    disponibilidad:true ,
    imagen:'https://i.pinimg.com/474x/1d/b9/2e/1db92eaa6b580efed142bbf4d7136e39.jpg',
    categoria:"",
    marca:""},
  {id: 7 ,
    nombre:'Gato JAJAJA' ,
    descripcion:"Un gato muy popular en las redes, basicante se esta riendo de ti por algun acontecimiento chistoso que hayas cometido." ,
    precio:9900.00 ,
    disponibilidad:true ,
    imagen:'https://i.redd.it/nvgk4t4ov1mc1.jpeg',
    categoria:"",
    marca:""},
  {id: 8 ,
    nombre:'Gato Duh' ,
    descripcion:"Un gato que,bueno,Duh,solo eta expresando un desconteto que ve ante sus ojos,quizas tu,nadie sabe,solo él,DUHHHH." ,
    precio:10000.00 ,
    disponibilidad:true ,
    imagen:'https://i.pinimg.com/236x/80/8c/01/808c01726360d42b7903bb8d30814808.jpg',
    categoria:"",
    marca:""},
  {id: 9 ,
    nombre:'Gato Muehehe' ,
    descripcion:"Un gato tambien famoso por su caracteristica mas popular, su cara muy tierna, haciendonos recoradar una risita muy tierna y graciosa." ,
    precio:29000 ,
    disponibilidad:true ,
    imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ15hBGa0ew68jbfMzdDTzB_03aaMMMLl7opoiJWevMukcJh-eVvxpo8LbU0MXm7oUjZoY&usqp=CAU',
    categoria:"",
    marca:""}
]
  
constructor(private carritoService: CarritoService, private favoritoService: FavoritoService){}
  //metodo para agregar un producto al carrito
  agregar(productos: Producto){
    this.carritoService.agregarAlCarrito(productos)
    alert('El producto se agrego al carrito :D') //muestra el mensaje
 
  };

  agregarFavoritos(productos: Producto){
  this.favoritoService.agregarFavorito(productos)
 
  
  };
};
