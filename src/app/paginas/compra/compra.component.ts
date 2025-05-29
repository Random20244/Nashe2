import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import jsPDF from 'jspdf';
import { CarritoService } from '../../servicio/carrito.service';


@Component({
  selector: 'app-compra',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent implements OnInit {
 //Declaracion de formulario reactivo para la compra 
 formularioCompra!: FormGroup

 //Variable para almacenar el total de la compra(subtotal+envio)
 total!:number 

 //Costo fijo de envio
 envio=5000

 //Indicador para saber si la factura ya fue generada
 facturaGenerada = false

 //Objeto que contiene la informacion de la factura generada
 factura: any

 //Controla la visibilidad del modal que muestra el PDF
 mostrarModal = false

 //Fuente segura para mostrar el PDF generado en el iframe (URL sanitizada)
 pdfSrc: SafeResourceUrl | undefined

 constructor(
  private fb:FormBuilder, //FormBuilder para crear el formulario activo
  private carritoSevice:CarritoService, //Servicio para manejar el carrito y obtener productos 
  private sanitizer:DomSanitizer //Para sanitizar la URL del PDF y que angular lo permita mostrar 
 ){}

 //Metodo que se ejecuta al inicializar el componente 
 ngOnInit(): void {
   //Formulario con los campos requeridos y validadores 
   this.formularioCompra = this.fb.group({
    nombre:['',Validators.required],
    direccion:['',Validators.required],
    correo:['',[Validators.required, Validators.email]],
    telefono:['',Validators.required],
    codigoPostal:['',Validators.required],
    ciudad:['',Validators.required],
    provincia:['',Validators.required],
    metodoPago:['',Validators.required],
   })
 }
 //Calcula el total de la compra sumando el subtotal y el costo de envio
 calcularTotal():number{
  const subtotal = this.carritoSevice.obtenerTotal();//Obtiene subtotal del carrito
  this.total = subtotal+this.envio
  return this.total
}

//Prepara los datos para la factura con cliente,productos,totales y fecha
 emitirFactura():void{
 const datosCliente= this.formularioCompra.value; //Datos ingresados del formulario
 const productos= this.carritoSevice.obtenerProductos(); //Productos del carrito
 const totalFinal= this.calcularTotal(); //Total calculado con envio

 // 
 }
}
