import { Component } from '@angular/core';
import { equipo } from '../../modelos/quienes-somos.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
      foto: ''
    },
    {
      nombre: 'William Barnegas',
      rol: 'Mano derecha del fundador',
      foto: ''
    },
    {
      nombre: 'Barbara Salvo',
      rol: 'Madre del fundador y apoyadora financiera',
      foto: ''
    },
    {
      nombre: 'Enoc Ivan Pino',
      rol: 'Padre y apoyo financiero',
      foto: ''
    }
  ];
}


