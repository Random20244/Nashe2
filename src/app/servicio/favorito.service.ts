import { Injectable } from '@angular/core';
import { Productos } from '../modelos/produc.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

private favoritoSubject=new BehaviorSubject <{productos:Productos}[]>([]);
  favorito$=this.favoritoSubject.asObservable();

  agregarFavorito(productos:Productos){
    const favorito=this.favoritoSubject.getValue();
    const encontrado=favorito.find(p=>p.productos.id === productos.id);

    if(encontrado){
      alert("El producto ya se encuentra en su lista de deseados (─‿‿─).")
    }else{
      this.favoritoSubject.next([...favorito,{productos}])
      alert('Se guardo en su lista de favoritos :D')
    }
  }

  eliminarFavorito(productosId:number){
    const productos = this.favoritoSubject.getValue().filter(p=>p.productos.id !== productosId)
    this.favoritoSubject.next(productos)
  }

  constructor() { }
}
