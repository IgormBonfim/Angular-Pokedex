import { Pokemon } from 'src/app/model/pokemon';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pokedex';

  pokemons = [ new Pokemon(1, "Bulbasaur"), new Pokemon(2, "Ivysaur"), new Pokemon(3, "Venosaur"), new Pokemon(6, "Charizard") ]

}
