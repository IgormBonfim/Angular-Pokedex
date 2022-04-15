import { PokemonCardService } from './../pokemon-card/pokemon-card.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input()
  pokemon: string = "";

  constructor( private cardPokemon: PokemonCardService) { }

  ngOnInit(): void {
  }

  onSelect(pokemon: string) {
    this.cardPokemon.setPokemon(pokemon);
  }

}
