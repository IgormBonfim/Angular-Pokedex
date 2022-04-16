import { LeadingZeros } from './../../model/LeadingZeros';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent extends LeadingZeros implements OnInit {

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {
    super();
  }

  numeroPokemon: number = 0;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        const pokemonNumber =  params.number;
        this.numeroPokemon = pokemonNumber;
      }
    )
  }
}
