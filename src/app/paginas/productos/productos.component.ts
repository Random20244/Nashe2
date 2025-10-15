import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Productos } from '../../modelos/productos.model';
import { CarritoService } from '../../servicio/carrito.service';
import { RouterModule } from '@angular/router';
import { FavoritoService } from '../../servicio/favorito.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
 
Productos: Productos []=[
  {id: 1 ,
    nombre:'Gato con Lentes' ,
    descripcion:"Un gato que lleva puesto unos lentes, lo hacen ver muy atractivo, posando para fotos y videos que luego seran memes, +10000000 de aura y God." ,
    precio:12570.00 ,
    disponibilidad:true ,
    imagen:'https://img.freepik.com/psd-gratis/gato-aislado-fondo-blanco_23-2151133768.jpg?semt=ais_hybrid&w=740', 
    categoria:'Nova',
    marca:'Sansung'},
  {id: 2 ,
    nombre:'Gato Solitario' ,
    descripcion:"Un gato que lo dejaron por otro gato,o simplemnte le gusta posar de esa manera, nadie sabe, solo él y el tiempo lo diran." ,
    precio:12200.00 ,
    disponibilidad:true ,
    imagen:"https://preview.redd.it/some-silly-cat-memes-v0-kjvhq9ip0o5a1.jpg?width=640&crop=smart&auto=webp&s=084994fae37d5be1fab5c628ca5ab9df312e7b9b",
    categoria:'Eclipsor',
    marca:'Motoge'},
  {id: 3 ,
    nombre:'Gato Guaton' ,
    descripcion:"Un gato muy regordete, jefe de los mininos y debodaror de wiska, es muy fuerte y muy pesado superando a toda raza felina." ,
    precio:35000.00 ,
    disponibilidad:true ,
    imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMaTgCiYMxeqiFz0KlzaEgqc0cYr0ztFGSsA&s',
    categoria:'Void',
    marca:'Motoge'},
  {id: 4 ,
    nombre:'Gato Dance' ,
    descripcion:"Un gato que le gusta mucho danzar(a pesar de que sea un gato y no sea natural), cuanta con muy buen estilo de baile, Comico." ,
    precio:15000.00 ,
    disponibilidad:true ,
    imagen:'https://us-tuna-sounds-images.voicemod.net/2c08d5ee-b180-4163-b061-59e48eeea633-1709373139533.png',
    categoria:'Socialista',
    marca:'Sansung'},
  {id: 5 ,
    nombre:'Gato?' ,
    descripcion:"Un michi que sin duda tuvo una de los cambios mas notorios en su cuerpo, razones o causas son desconocidas,solo no lo moleste." ,
    precio:367840.00 ,
    disponibilidad:true ,
    imagen:'https://i.pinimg.com/474x/fa/9d/47/fa9d47de28f63d6faf88944ef3231dbd.jpg',
    categoria:'Mile',
    marca:'Iphone'},
  {id: 6 ,
    nombre:'Gato...?' ,
    descripcion:"Hermano del anterior 'gato?' solo que tuvo piernas humanoides a que todo completo como su hermano,cuidado si lo ves." ,
    precio:437859.15 ,
    disponibilidad:true ,
    imagen:'https://i.pinimg.com/474x/1d/b9/2e/1db92eaa6b580efed142bbf4d7136e39.jpg',
    categoria:'Nova',
    marca:'Iphone'},
  {id: 7 ,
    nombre:'Gato JAJAJA' ,
    descripcion:"Un gato muy popular en las redes, basicante se esta riendo de ti por algun acontecimiento chistoso que hayas cometido." ,
    precio:9900.00 ,
    disponibilidad:true ,
    imagen:'https://i.redd.it/nvgk4t4ov1mc1.jpeg',
    categoria:'Mega',
    marca:'Nokia'},
  {id: 8 ,
    nombre:'Gato Duh' ,
    descripcion:"Un gato que,bueno,Duh,solo eta expresando un desconteto que ve ante sus ojos,quizas tu,nadie sabe,solo él,DUHHHH." ,
    precio:10000.00 ,
    disponibilidad:true ,
    imagen:'https://i.pinimg.com/236x/80/8c/01/808c01726360d42b7903bb8d30814808.jpg',
    categoria:'Mega',
    marca:'Nokia'},
  {id: 9 ,
    nombre:'Gato Muehehe' ,
    descripcion:"Un gato tambien famoso por su caracteristica mas popular, su cara muy tierna, haciendonos recoradar una risita muy tierna y graciosa." ,
    precio:29000 ,
    disponibilidad:true ,
    imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ15hBGa0ew68jbfMzdDTzB_03aaMMMLl7opoiJWevMukcJh-eVvxpo8LbU0MXm7oUjZoY&usqp=CAU',
    categoria:'Nova',
    marca:'Iphone'}
]
  
constructor(private carritoService: CarritoService, private favoritoService: FavoritoService){}
  //metodo para agregar un producto al carrito
  agregar(productos: Productos){
    this.carritoService.agregarAlCarrito(productos)
    alert('El producto se agrego al carrito :D') //muestra el mensaje
 
  };

  agregarFavoritos(productos: Productos){
  this.favoritoService.agregarFavorito(productos)
   alert('Producto agregado a favoritos');
  };

  searchTerm:string='';

  selectedCategory:string='';
  selectedBrand:string='';
  minPrecio:number|null=null;
  maxPrecio:number|null=null;

  get categories():string[]{
    return[...new Set(this.Productos.map(p => p.categoria))]
  }

  get marca():string[]{
    return[...new Set(this.Productos.map(p => p.marca))]
  }

  onSearch(event:Event):void{
    event.preventDefault();
  }

  resetfiltres():void{
    this.searchTerm = '';
    this.selectedCategory = '';
    this.selectedBrand = '';
    this.minPrecio = null;
    this.maxPrecio = null;
  }

  get filteredProducts():Productos[]{
    return this.Productos.filter(p=>
    (this.searchTerm ===''|| p.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()))&& 
    (this.selectedCategory ===''|| p.categoria === this.selectedCategory)&&
    (this.selectedBrand === ''|| p.marca === this.selectedBrand)&&
    (this.minPrecio === null || p.precio >= this.minPrecio)&&
    (this.maxPrecio === null || p.precio <= this.maxPrecio))
  }
};
