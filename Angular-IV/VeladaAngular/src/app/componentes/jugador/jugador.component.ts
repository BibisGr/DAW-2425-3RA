import { ActivatedRoute } from '@angular/router';
import { Participante } from '../../common/player';
import { DataService } from '../../servicios/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-jugador',
  imports: [],
  templateUrl: './jugador.component.html',
  styleUrl: './jugador.component.css'
})
export class JugadorComponent implements OnInit {
  participanteONE?: Participante;

  constructor(
    private dataservice: DataService,
    private activeRoute: ActivatedRoute,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadONEParticipante();
  }

  loadONEParticipante() {
    const id = this.activeRoute.snapshot.params['alias'];
    this.dataservice.getPlayerbyId(id).subscribe(
    {
      next: (data)=>{
        this.participanteONE = data;
        console.log(this.participanteONE);
      },
      error: (error)=>{
        console.log(error);
      },
      complete: ()=>{
        console.log('Petición completada');
      }
    }
    )
  }
  // persona ={
  //   nombre: 'DavidGarcía ',
  //   alias : 'The Gregg',
  //   pais: 'Spain',
  //   pesoenKG: 75,
  //   rival: 'WetsCol',
  //   win: 0,
  //   lose: 0
  // }
  // jugador: Jugador={
  //   nombre: 'Rocío ',
  //   alias : 'RoRo',
  //   pais: 'Spain',
  //   pesoenKG: 56,
  //   rival: 'Abby',
  //   win: 1,
  //   lose: 0
  // }
  //   esdebut(jugador: Jugador){
  //   if(jugador.win == 0 || jugador.lose){
  //     return 'Debutante'
  //   }
  //   else return 'Experimentado'
  // }
  // miParticipante :Participante={
  //   jugador: this.jugador,
  //   profesion: 'streamer'
  // }



}
