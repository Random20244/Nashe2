import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { QuienesSomosComponent } from './paginas/quienes-somos/quienes-somos.component';
import { OfertasComponent } from './paginas/ofertas/ofertas.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { FavoritoComponent } from './paginas/favorito/favorito.component';
import { CompraComponent } from './paginas/compra/compra.component';

export const routes: Routes = [
    {path:'',redirectTo:'/inicio',pathMatch:'full'},

    {path:'inicio',component:InicioComponent},

    {path:'contacto',component:ContactoComponent},

    {path:'productos',component:ProductosComponent},

    {path:'quienes-somos',component:QuienesSomosComponent},

    {path: 'carrito',component:CarritoComponent},

    {path: 'ofertas',component:OfertasComponent},

    {path: 'favorito',component:FavoritoComponent},

    {path: 'compra',component:CompraComponent}
    
];
