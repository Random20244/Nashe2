import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Producto } from '../../modelos/produc.model';


@Component({
  selector: 'app-ofertas',
  imports: [CommonModule,RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
  Producto: Producto[]=[
    {id:1 ,nombre:'Gato con ganas de mimir' ,descripcion:'Un gato que madruga y desea poder volver a dormir, muy silly y flojo...:D ' ,precio:2200 ,disponibilidad:true ,imagen:"https://i.pinimg.com/236x/f9/e9/23/f9e923139082d4fb59e7f8204e133b70.jpg"},
    {id:2 ,nombre:'Gato serio' ,descripcion:'Un gato que vio lo peor...me recuerda a la mirada de las mil yardas, quiza el costo del alimento le cobro factura, la inflacion inpacta aveces.' ,precio:10000 ,disponibilidad:true ,imagen:"https://i.pinimg.com/236x/19/ec/ed/19eced750103fc837c742804a7a820c9.jpg"},
    {id:3 ,nombre:'Gato muy silly' ,descripcion:'Un gato que se paso de silly y ahora esta contenido por el bien de los demas sillys,si otro gato hace contacto con el se volvera silly.' ,precio:7500 ,disponibilidad:true ,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9uVE3nWycvEM7-GFgAMcsG84fq6Ak8chSA&s"},
    {id:4 ,nombre:'Gato two sides' ,descripcion:'El gato de dos lados, es silly y insane a la vez, dependiendo de la situacion o dia es el lado que tomara, amigable con los demas y muy charlatan.' ,precio:55 ,disponibilidad:true ,imagen:"https://ih1.redbubble.net/image.4898561606.7728/raf,360x360,075,t,fafafa:ca443f4786.jpg"},
    {id:5 ,nombre:'Gatito abogado' ,descripcion:'Un lindo gatito que a su tempranos meses ya estaba estudiando abogasia, muy apudaro por terminar y ser como su padre, esperemos que lo sea.' ,precio:85 ,disponibilidad:true ,imagen:"https://i.pinimg.com/236x/44/e1/24/44e124fcc1c357ad68e60c89a420d4b1.jpg"},
    {id:6 ,nombre:'Gato abogado' ,descripcion:'Un gato ya adulto que se dedica a la defensa de los justos y puros de corazon gatuno, un heroe sin capa, tiene mis respetos.' ,precio:15 ,disponibilidad:true ,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTTqiDF3oBlGlW_oBBMGV_HXyqF4XOiNIzCdN1eOq4YYYSZVE3Nh8G9W6ivqnDE8DawAo&usqp=CAU"}
  ];

  constructor(private carritoService: CarritoService){}

  agregar(producto:Producto){
this.carritoService.agregarAlCarrito(producto)
alert('Se ah agregado la oferta al carrito');
  }
}
