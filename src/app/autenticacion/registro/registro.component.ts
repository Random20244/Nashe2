import { Component } from '@angular/core';
import { AutenticacionService } from '../../servicio/autenticacion.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private auth: AutenticacionService, private router: Route) {}

  onRegister() {
    this.auth.register(this.user).subscribe(() => {
      alert('Registro exitoso');
      this.router.navigate(['/login']);
    });
  }
}

