export interface Productos{
    id:number;
    nombre:string;
    descripcion:string;
    precio:number;
    imagen:string;
    disponibilidad:boolean;
    cantidad?:number;
    categoria:string;
    marca:string;
}