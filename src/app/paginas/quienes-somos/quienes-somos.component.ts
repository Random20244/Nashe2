import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { equipo } from '../../modelos/quienes-somos.model';

@Component({
  selector: 'app-quienes-somos',

  imports:[CommonModule,RouterModule],
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent {
  QuienesSomos: equipo []= [
    {
      nombre: 'Benjamín Pino',
      rol: 'Fundador de la pagina web y crador del negocio',
      foto: 'https://img.freepik.com/foto-gratis/hombre-pulgar-arriba_1149-1712.jpg?semt=ais_hybrid&w=740'
    },
    {
      nombre: 'William Barnegas',
      rol: 'Mano derecha del fundador',
      foto: 'https://img.freepik.com/foto-gratis/hombre-sonriendo-pulgar-arriba_1139-678.jpg'
    },
    {
      nombre: 'Barbara Salvo',
      rol: 'Madre del fundador y apoyadora financiera',
      foto: 'https://static8.depositphotos.com/1010146/915/i/450/depositphotos_9153000-stock-photo-joyful-young-woman-showing-ok.jpg'
    },
    {
      nombre: 'Enoc Ivan Pino',
      rol: 'Padre y apoyo financiero',
      foto: 'https://e1.pngegg.com/pngimages/772/98/png-clipart-willy-alex-man-showing-double-thumbs-up.png'
    },
    {nombre: 'Lisandro Garcia',
      rol: 'Mano izquierda del fundador',
      foto: 'https://img.freepik.com/fotos-premium/personaje-blanco-3d-empresario-pulgar-arriba_168450-116.jpg'
    }
  ];
}


