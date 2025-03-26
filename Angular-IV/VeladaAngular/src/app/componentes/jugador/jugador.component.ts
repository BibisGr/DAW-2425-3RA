import { Participante } from './../../common/participante';
import { Jugador } from './../../common/jugador';
import { Component } from '@angular/core';


@Component({
  selector: 'app-jugador',
  imports: [],
  templateUrl: './jugador.component.html',
  styleUrl: './jugador.component.css'
})
export class JugadorComponent {
  persona ={
    nombre: 'DavidGarcía ',
    alias : 'The Gregg',
    pais: 'Spain',
    pesoenKG: 75,
    rival: 'WetsCol',
    win: 0,
    lose: 0
  }

  jugador: Jugador={
    nombre: 'Rocío ',
    alias : 'RoRo',
    pais: 'Spain',
    pesoenKG: 56,
    rival: 'Abby',
    win: 1,
    lose: 0
  }

    esdebut(jugador: Jugador){
    if(jugador.win == 0 || jugador.lose){
      return 'Debutante'
    }
    else return 'Experimentado'
  }
  miParticipante :Participante={
    jugador: this.jugador,
    profesion: 'streamer'
  }


}
