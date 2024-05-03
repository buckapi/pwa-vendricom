import { Component, OnInit } from '@angular/core';


import { CommonModule } from '@angular/common';
// import { Butler } from '@app/services/butler.service';
import { GlobalService } from '@app/services/global.service';
import { virtualRouter } from '@app/services/virtualRouter.service';
import { CardsComponent } from '../cards/cards.component';
import { PodiumComponent } from '../podium/podium.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,PodiumComponent,
    CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products:any;
  datos = [
    { posicion: '1', nombre: 'Andrea', pais: 'Venezuela', puntos: '100', promedio: '10.0' },
    { posicion: '2', nombre: 'Carlos', pais: 'Argentina', puntos: '95', promedio: '9.5' },
    { posicion: '3', nombre: 'Laura', pais: 'España', puntos: '90', promedio: '9.0' },
    { posicion: '4', nombre: 'Pedro', pais: 'México', puntos: '85', promedio: '8.5' },
    { posicion: '5', nombre: 'María', pais: 'Colombia', puntos: '80', promedio: '8.0' },
    { posicion: '6', nombre: 'Alejandro', pais: 'Chile', puntos: '75', promedio: '7.5' },
    { posicion: '7', nombre: 'Sofía', pais: 'Perú', puntos: '70', promedio: '7.0' },
    { posicion: '8', nombre: 'Gabriel', pais: 'Brasil', puntos: '65', promedio: '6.5' },
    { posicion: '9', nombre: 'Isabella', pais: 'Uruguay', puntos: '60', promedio: '6.0' },
    { posicion: '10', nombre: 'Lucas', pais: 'Ecuador', puntos: '55', promedio: '5.5' },
   // Agrega más datos según sea necesario
  ];
  constructor(
    public virtualRouter: virtualRouter,
    public global:GlobalService
  ) { }
  setCat(i:any){
    this.global.categoryPrev=this.global.categories[i];
    this.sorting();
  }
  sorting(){
    for (let i = 3; i <= 10; i++) {
      this.datos.push({
        posicion: i.toString(),
        nombre: `Nombre${i}`,
        pais: `País${i}`,
        puntos: (Math.floor(Math.random() * 100) + 1).toString(),
        promedio: (Math.random() * (10 - 5) + 5).toFixed(1)
      });
    }
    // Ordena los datos por puntos de manera descendente
    this.datos.sort((a, b) => parseInt(b.puntos) - parseInt(a.puntos));
  
  }
  ngOnInit(): void {
  }
}
