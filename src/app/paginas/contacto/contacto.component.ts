import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true, // 👈 asegúrate de tener esto si usás componentes standalone
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  miFormulario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  enviar() {
    if (this.miFormulario.valid) {
      console.log('Datos enviados:', this.miFormulario.value);
      alert('✅ ¡Mensaje enviado correctamente!');
      this.miFormulario.reset();
    } else {
      alert('⚠️ Por favor, completa todos los campos correctamente.');
    }
  }
}
