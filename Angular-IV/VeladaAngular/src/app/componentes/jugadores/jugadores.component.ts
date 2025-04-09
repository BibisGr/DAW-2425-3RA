import { Component, OnInit } from '@angular/core';
import { Player } from '../../common/player';
import { DataService } from '../../servicios/data.service';
import { Route, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-jugadores',
  imports: [RouterModule, RouterLink],
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.css'
})
export class JugadoresComponent implements OnInit {

  constructor(private dataservice: DataService) { }

  player!: Player;

  ngOnInit(): void {
    this.loadplayer();
  }

  loadplayer() {
    this.dataservice.getplayer().subscribe(
      {
        next: (data) => {
          this.player = data;
          console.log(this.player);
        },
        error: err => {
          console.log(err)
        },
        complete: () => {
          console.log('Petición completada')
        }
      }
    )
  }
  // superheroes = {
  //   SquadName: 'Los dawengadores',
  //   baseSecreta: 'Aula 1',
  //   city: 'Valencia City',
  //   miembros:[
  //     {
  //       alias: 'Ironman',
  //       identidadSecreta: 'Tony Stark',
  //       heroeactivo: true,
  //       superpoderes: [
  //         'Volar',
  //         'Disparar rayos',
  //         'Inteligencia superior']
  //     },
  //     {
  //       alias: 'Hulk',
  //       identidadSecreta: 'Bruce Banner',
  //       heroeactivo: true,
  //       superpoderes: [
  //         'Fuerza sobrehumana',
  //         'Resistencia',
  //         'Regeneración']
  //     },
  //     {
  //       alias: 'Thor',
  //       identidadSecreta: 'Thor Odinson',
  //       heroeactivo: true,
  //       superpoderes: [
  //         'Controlar el trueno',
  //         'Volar',
  //         'Fuerza sobrehumana']
  //     },

  //   ]
  // }


}
