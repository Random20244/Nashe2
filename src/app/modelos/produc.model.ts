export interface Producto{
    id:number;
    nombre:string;
    descripcion:string;
    precio:number;
    imagen:string;
    desponibilidad:boolean;
    cantidad?:number;
}