import { Component } from '@angular/core';
import { AutenticacionService } from '../../servicio/autenticacion.service';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  imports: [],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
email = '';
  password = '';

 // constructor(private auth: AutenticacionService, private router: Routes) {}

 // onLogin() {
   // this.auth.login(this.email, this.password).subscribe(user => {
     // if (user.length > 0) {
       // alert('Login correcto');
        //this.router.navigate(['/registro']); 
      //} else {
       // alert('Credenciales incorrectas');
      }
    //});
 // }
//}

