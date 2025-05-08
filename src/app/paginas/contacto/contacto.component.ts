import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  usuario = {
    nombre: ''
  
  };
  miFormulario = new FormGroup({
    email: new FormControl('')
  })
}
