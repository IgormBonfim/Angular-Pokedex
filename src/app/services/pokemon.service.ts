import { Pokemon } from 'src/app/model/pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly allPokemonsUrl = "https://pokeapi.co/api/v2/pokemon?limit=151/";

  constructor( private httpClient: HttpClient  ) {

   }

   listAllPokemons():Observable<Pokemon>{
     return this.httpClient.get<Pokemon>(this.allPokemonsUrl).pipe(
      tap( res => res),
      tap( res => {
        res.results.map( (resPokemons: Pokemon) => {

          this.apiGetPokemons(resPokemons.url).subscribe(
            res => {
              resPokemons.id = res.id;
              resPokemons.types = res.types;
              resPokemons.stats = res.stats;
              resPokemons.abilities = res.abilities;
            }
          )
        })
      })
     )
   }

   public apiGetPokemons(url: string):Observable<any>{
    return this.httpClient.get<Pokemon>(url).pipe(
      map(
        res => res
      )
    )
   }
}
