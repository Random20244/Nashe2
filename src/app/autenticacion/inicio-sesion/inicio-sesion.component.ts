import { Component } from '@angular/core';
import { AutenticacionService } from '../../servicio/autenticacion.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  imports: [],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
email = '';
  password = '';

  constructor(private auth: AutenticacionService, private router: Route) {}

  onLogin() {
    this.auth.login(this.email, this.password).subscribe(user => {
      if (user.length > 0) {
        alert('Login correcto');
        this.router.navigate(['/dashboard']); 
      } else {
        alert('Credenciales incorrectas');
      }
    });
  }
}

