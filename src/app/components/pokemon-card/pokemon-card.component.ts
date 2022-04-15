import { PokemonCardService } from './pokemon-card.service';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  pokemon: string = "";

  constructor(
    private pokemonService: PokemonService,
    private pokemonCardService: PokemonCardService,
    ) { }

  ngOnInit(): void {

    this.pokemonCardService.getPokemon();
    this.pokemonService.list();
    
  }

}
