import { LeadingZeros } from './../../model/LeadingZeros';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tipo } from 'src/app/model/Tipo';

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
  public typeRelations: Tipo = new Tipo();

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { super() }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        const pokemonNumber =  params.number;
        this.numeroPokemon = pokemonNumber;
        this.getPokemon();

      }
    )
  }

  getPokemon() {
    this.pokemonService.apiGetPokemons(this.pokemonUrl + this.numeroPokemon).subscribe(
      res => {
        this.pokemon = res;
        this.isLoading = true;
        console.log(this.pokemon.types);
        this.onSelectPokemon();
        console.log(this.pokemon);
      }
    );


  }

  onSelectPokemon() {
    for(let i = 0; i < this.pokemon.types.length; i++) {
      console.log(this.pokemon.types[i].type.name);
      this.getTypes(this.pokemon.types[i].type.url);
    }
  }

  getTypes(url: string) {
    this.pokemonService.getTypeRelations(url).subscribe(
      res => {
        this.typeRelations.doubleDamageFrom = res.damage_relations.double_damage_from;
        this.isLoading = true;
        console.log(this.typeRelations);
      }
    )
  }
}
