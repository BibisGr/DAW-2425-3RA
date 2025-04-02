import { Component } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  imports: [],
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.css'
})
export class JugadoresComponent {
  superheroes = {
    SquadName: 'Los dawengadores',
    baseSecreta: 'Aula 1',
    city: 'Valencia City',
    miembros:[
      {
        alias: 'Ironman',
        identidadSecreta: 'Tony Stark',
        heroeactivo: true,
        superpoderes: [
          'Volar',
          'Disparar rayos',
          'Inteligencia superior']
      },
      {
        alias: 'Hulk',
        identidadSecreta: 'Bruce Banner',
        heroeactivo: true,
        superpoderes: [
          'Fuerza sobrehumana',
          'Resistencia',
          'Regeneración']
      },
      {
        alias: 'Thor',
        identidadSecreta: 'Thor Odinson',
        heroeactivo: true,
        superpoderes: [
          'Controlar el trueno',
          'Volar',
          'Fuerza sobrehumana']
      },
      
    ]
  }
}
