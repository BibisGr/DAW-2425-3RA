import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Participante, Player } from '../common/player';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'data/data.json';

  constructor(private http: HttpClient) { }

  getplayer(): Observable<Player>{
    return this.http.get<Player>(this.url)
  }

  getPlayerbyId(id : string): Observable<Participante>{
    return this.getplayer()
    .pipe(map(players=>{
      const participante = players.participantes
      .find(participante => participante.alias === id);
      if (!participante) {
        throw new Error(`Participante with id ${id} not found`);
      }
      return participante
    }));
  }
}
