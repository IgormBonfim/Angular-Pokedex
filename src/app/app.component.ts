import { PokemonService } from './services/pokemon.service';
import { Pokemon } from 'src/app/model/Pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public getAllPokemons: Pokemon[];
  private setAllPokemons: Pokemon[];

  constructor ( private pokemonService: PokemonService) {
    this.setAllPokemons = [];
    this.getAllPokemons = this.setAllPokemons
  }

  ngOnInit(): void {
    this.pokemonService.listAllPokemons().subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        console.log(this.getAllPokemons);
      }
    );
  }

  getSearch(value: string) {
    const filter=  this.setAllPokemons.filter( (res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
