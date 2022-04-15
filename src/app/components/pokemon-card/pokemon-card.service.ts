import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonCardService {

  pokemonAtual: string = "";

  constructor() { }

  setPokemon(pokemon: string) {
    this.pokemonAtual = pokemon;
    console.log(this.pokemonAtual);
  }

  getPokemon() {
    return this.pokemonAtual;
  }
}
