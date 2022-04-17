import { Pokemon } from 'src/app/model/pokemon';
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

  private readonly pokemonUrl: string = "https://pokeapi.co/api/v2/pokemon/"

  public pokemon: any;
  public isLoading: boolean = false;
  public numeroPokemon: number = 0;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {
    super();
  }



  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        const pokemonNumber =  params.number;
        this.numeroPokemon = pokemonNumber;
        this.getPokemon();
        console.log(this.pokemon);

      }
    )
  }

  getPokemon() {
    this.pokemonService.apiGetPokemons(this.pokemonUrl + this.numeroPokemon).subscribe(
      res => {
        this.pokemon = res;
        this.isLoading = true;
      }
    );
  }
}
