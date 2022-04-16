import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly allPokemonsUrl = "https://pokeapi.co/api/v2/pokemon?limit=151/";
  private readonly pokemonUrl = "https://pokeapi.co/api/v2/pokemon/"

  constructor( private httpClient: HttpClient  ) {

   }

   listAllPokemons():Observable<any>{
     return this.httpClient.get<any>(this.allPokemonsUrl).pipe(
      tap( res => res),
      tap( res => {
        res.results.map( (resPokemons: any) => {

          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )

        })
      })
     )
   }

   public apiGetPokemons(url: string):Observable<any>{
    return this.httpClient.get<any>(url).pipe(
      map(
        res => res
      )
    )
   }
}
