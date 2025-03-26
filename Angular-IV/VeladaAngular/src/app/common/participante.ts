import { Jugador } from "./jugador";
export class Participante {

  jugador: Jugador;
  profesion: string;

  constructor(juggador: Jugador, profession: string){

    this.jugador = juggador;
    this.profesion = profession;

  }


}
