import { Pokemon } from '../model/Pokemon'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private listOfPokemons = 151;
  private allPokemonsUrl = `https://pokeapi.co/api/v2/pokemon?limit=${this.listOfPokemons}/`;

  constructor( private httpClient: HttpClient  ) {

   }

   listAllPokemons():Observable<Pokemon>{
     return this.httpClient.get<Pokemon>(this.allPokemonsUrl).pipe(
      tap( res => res ),
      tap( res => {
        res.results.map( (resPokemons: Pokemon) => {

          this.apiGetPokemons(resPokemons.url).subscribe(
            resposta => {
              if (resPokemons.name == "nidoran-f") {
                resPokemons.name = "nidoran_f"
              };
              if (resPokemons.name == "nidoran-m") {
                resPokemons.name = "nidoran_m"
              }
              if (resPokemons.name == "mr-mime") {
                resPokemons.name = "mr.mime"
              }
              resPokemons.id = resposta.id;
              resPokemons.types = resposta.types;
              resPokemons.stats = resposta.stats;
              resPokemons.abilities = resposta.abilities;
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

   public onLoadMore () {
     this.listOfPokemons += 151;
     console.log(this.listOfPokemons)
   }
}
