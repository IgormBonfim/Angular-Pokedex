import { LeadingZeros } from './../../model/LeadingZeros';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent extends LeadingZeros implements OnInit {

  private readonly pokemonUrl: string = "https://pokeapi.co/api/v2/pokemon/"
  private readonly pokemonName: string = "https://pokeapi.co/api/v2/pokemon-species/"

  public pokemon: any;
  public isLoading: boolean = false;

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
        this.getPokemon();
        console.log(this.pokemon);

      }
    )
  }

  getPokemon() {
    const pokemon = this.pokemonService.apiGetPokemons(this.pokemonUrl + this.numeroPokemon).subscribe(
      res => {
        this.pokemon = res;
        this.isLoading = true;
      }
    );
    // const name = this.pokemonService.apiGetPokemons(this.pokemonName + this.numeroPokemon);

    // return forkJoin([pokemon, name]).subscribe(
    //   res => {
    //     this.pokemon = res;
    //   }
    // )
  }
}
