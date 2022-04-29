import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
