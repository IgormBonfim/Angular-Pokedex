import { Pokemon } from './../model/pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokemons = new ReplaySubject<Pokemon[]>(1)

  private readonly  API = "https://pokeapi.co/api/v2/pokemon/";

  constructor( private httpClient: HttpClient  ) {

   }

   list() {
    this.httpClient.get(this.API).subscribe(Response => {
      console.log(Response)
    });
   }

   loadById(pokemonNumero: number){
     this.httpClient.get(this.API + pokemonNumero).subscribe(Response => {
       console.log(Response)
     });
   }
}
