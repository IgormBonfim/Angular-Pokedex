import { PokemonService } from './services/pokemon.service';
import { Pokemon } from 'src/app/model/pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'pokedex';

  pokemons = [ new Pokemon(1, "Bulbasaur"), new Pokemon(2, "Ivysaur"), new Pokemon(3, "Venosaur"), new Pokemon(6, "Charizard") ]
  pokemons2: any[] = [];

  public getAllPokemons: any;

  constructor ( private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.listAllPokemons().subscribe(
      res => {
        this.getAllPokemons = res.results;
        console.log(this.getAllPokemons);
      }
    );
  }

  getSearch(value: string) {
    const filter=  this.getAllPokemons.filter( (res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
