import { LeadingZeros } from './../../model/LeadingZeros';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent extends LeadingZeros implements OnInit {

  pokemon: string = "";

  constructor(
    private pokemonService: PokemonService,
    ) {super();}

  ngOnInit(): void {
    this.pokemonService.list();

  }

}
