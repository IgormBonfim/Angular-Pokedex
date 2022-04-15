import { LeadingZeros } from './../../model/LeadingZeros';
import { PokemonService } from './../../services/pokemon.service';
import { Pokemon } from 'src/app/model/pokemon';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent extends LeadingZeros {
  @Input()
  pokemon: Pokemon = new Pokemon(0, "");

  constructor(private pokemonService: PokemonService ) { super() }

  listPokemon(pokemonNumber: number) {
    this.pokemonService.loadById(pokemonNumber)
  }
}
