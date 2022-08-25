import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {CrearJuegoCommand} from '../commands/crearJuegoCommand';
import { Jugador } from '../model/juego';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  jugadores: Jugador[] = [
    {uid: 'ffff', alias: 'raul'},
    {uid: 'xxx', alias: 'andres'},
    {uid: 'ggggg', alias: 'pedro'}
  ];
  constructor(private http: HttpClient) { }

  crearJuego(command: CrearJuegoCommand){
    return this.http.post(environment.apiBase + '/juego/crear', command);
  }

  getJugadores(): Observable<Jugador[]>{
    //TODO: consumidor para consultar los usuarios
    return new Observable(subscriber => {
      subscriber.next(this.jugadores);
      subscriber.complete();
    });
  }

  getMisJuegos(uid:string){
    return this.http.get(environment.apiBase + '/juego/listar/' + uid);
  }

  getMiMazo(uid:string, juegoId:string){
    return this.http.get(environment.apiBase + '/juego/' + juegoId + '/getMazo/' + uid);
  }

  getTablero(juegoId:string){
    return this.http.get(environment.apiBase + '/juego/getTablero/' + juegoId)
  }
}
